import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` for GitHub Pages.
  output: "export",
  // Pages serves directories, so emit `/me/index.html` rather than `/me.html`.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
