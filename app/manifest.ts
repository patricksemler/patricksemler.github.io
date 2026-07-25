import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";

/* Web app manifest. This exists for the app icon: without it, a phone saving
 * the site to a home screen gets a screenshot of the page rather than a mark.
 *
 * `apple-icon.png` in `app/` covers iOS on its own — Safari reads the link
 * tag, not this file — so the icons below are what Android and desktop
 * browsers install from.
 *
 * The two entries are the same artwork at different insets. `any` is used
 * as-is; `maskable` is cropped to whatever silhouette the launcher prefers,
 * so its mark is pulled in to survive a circular crop. Shipping only one is
 * the usual mistake: an `any` icon fed to a mask loses its edges, and a
 * maskable icon shown unmasked looks stranded in dead space. */
/* `manifest.ts` compiles to a Route Handler, and `output: "export"` refuses to
 * emit one unless it is pinned static. Nothing here reads the request, so
 * there is nothing to give up by pinning it. */
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${profile.name} — ${profile.role}`,
    /* What actually fits under a home screen icon. */
    short_name: profile.name.split(" ")[0],
    description: profile.tagline,
    start_url: "/",
    display: "browser",
    /* Both track --color-bg in globals.css, like viewport.themeColor. */
    background_color: "#08070f",
    theme_color: "#08070f",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
