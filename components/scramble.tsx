"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* Interference over a name, not a decode of it.

   The usual version of this effect replaces the whole string with noise and
   resolves it a character at a time, which means the thing you pointed at is
   unreadable for as long as the animation runs. On a page whose entire job is
   to be read that is a bad trade, so this one inverts it: the name is legible
   in every frame, and only a few cells at a time are wrong.

   Three rules keep it that way.

     density   at most a quarter of the eligible cells are substituted in any
               one frame, and that share decays to nothing, so the name settles
               rather than merely stopping.
     anchors   whitespace and the first letter of each word are never touched.
               Word shape and word-initial letters are what the eye actually
               reads at a glance; hold those fixed and the rest can flicker
               without costing legibility.
     glyphs    punctuation and operators only. A substituted cell has to read
               as a damaged one — swap in a letter or a digit and you get a
               plausible alternative spelling instead, which is the one thing
               worse than noise.

   The mono face pays for the whole effect: every glyph has the same advance,
   so no substitution can reflow the line or shift a single pixel of the page
   around it. */
const GLYPHS = "!<>-_\\/[]{}=+*^?#%&$@";

/** How long a run lasts, start to settled. */
const DURATION = 520;

/** Minimum gap between reshuffles. rAF alone would strobe on a 120Hz panel;
 *  this holds the cadence at roughly 22 changes a second on every display. */
const FRAME = 45;

/** Share of eligible cells substituted at the very start of a run. */
const PEAK_DENSITY = 0.25;

/** Ceiling on simultaneous substitutions, whatever the density works out to.
 *
 *  Density alone is the right rule for a short name — two cells out of
 *  "LeetMind" — but it does not survive being scaled up. A 35-character job
 *  title has 28 eligible cells, so a quarter of them is seven, and seven picks
 *  scattered at random will now and then land four inside the same word and
 *  leave it a wreck while the rest of the line sits untouched. Capping the
 *  absolute count holds the worst frame to something still readable and costs
 *  the short names nothing, since they never reach the cap. */
const MAX_CELLS = 5;

/**
 * A run of text that flickers, and stays readable while it does.
 *
 * Two ways to set it off:
 *
 *   pointer  on hover or focus, and repeatable. Triggering is delegated to the
 *            nearest enclosing link, falling back to the span itself when there
 *            is none — project names render bare until a repo or demo URL is
 *            set, and both cases have to work. Binding to the link rather than
 *            the text means the whole target lights the effect, trailing arrow
 *            included, and that keyboard focus reaches it: focus does not
 *            travel down to a descendant span, so a handler on the text alone
 *            would never fire for anyone navigating by keyboard.
 *
 *   view     once, the first time it is scrolled into frame, then the observer
 *            disconnects. For the section markers, where the effect should read
 *            as the label being printed as you arrive at it. Firing it on every
 *            pass would turn a section heading into something that twitches
 *            each time you scroll past, which is the opposite of the intent.
 */
export function ScrambleText({
  text,
  className,
  trigger = "pointer",
}: {
  text: string;
  className?: string;
  trigger?: "pointer" | "view";
}) {
  const [display, setDisplay] = useState(text);
  const hostRef = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<number | null>(null);

  const run = useCallback(() => {
    /* Read live rather than at mount, so switching the system setting takes
       effect without a reload. */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);

    const chars = Array.from(text);
    const targets = chars.reduce<number[]>((acc, char, i) => {
      const wordInitial = i === 0 || /\s/.test(chars[i - 1]);
      if (!/\s/.test(char) && !wordInitial) acc.push(i);
      return acc;
    }, []);
    if (targets.length === 0) return;

    const started = performance.now();
    let painted = 0;

    const tick = (now: number) => {
      const progress = (now - started) / DURATION;

      if (progress >= 1) {
        frameRef.current = null;
        setDisplay(text);
        return;
      }

      if (now - painted >= FRAME) {
        painted = now;

        const count = Math.min(
          Math.round(targets.length * PEAK_DENSITY * (1 - progress)),
          MAX_CELLS,
        );
        const next = chars.slice();
        const pool = targets.slice();

        /* Drawn without replacement — picking the same cell twice would quietly
           lower the density below what the ramp asked for. */
        for (let n = 0; n < count; n++) {
          const pick = Math.floor(Math.random() * pool.length);
          next[pool[pick]] = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          pool.splice(pick, 1);
        }

        setDisplay(next.join(""));
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
  }, [text]);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    if (trigger === "view") {
      /* Half the label has to be in frame before it fires, so a marker clipped
         by a single pixel at the bottom of the viewport does not spend its one
         run where nobody can see it. */
      const observer = new IntersectionObserver(
        ([entry], self) => {
          if (!entry.isIntersecting) return;
          self.disconnect();
          run();
        },
        { threshold: 0.5 },
      );

      observer.observe(el);

      return () => {
        observer.disconnect();
        if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      };
    }

    const host = el.closest("a") ?? el;

    /* Pointing is a hover; touching is not — the same distinction the `.entry`
       rule in globals.css draws, and for the same reason. An emulated hover
       fires on touch-down, so without this a thumb landing on a title to begin
       a scroll would set the name flickering. */
    const onPointerEnter = (event: PointerEvent) => {
      if (event.pointerType !== "touch") run();
    };

    host.addEventListener("pointerenter", onPointerEnter);
    host.addEventListener("focus", run);

    return () => {
      host.removeEventListener("pointerenter", onPointerEnter);
      host.removeEventListener("focus", run);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [run, trigger]);

  return (
    <span ref={hostRef} className={className}>
      {display}
    </span>
  );
}
