import type { NextConfig } from "next";
const config: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "query", key: "menu" }],
        destination: "/menus",
        permanent: true,
      },
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/version-b.html", destination: "/", permanent: true },
      {
        source: "/xiaolongbao.html",
        destination: "/xiaolongbao",
        permanent: true,
      },
    ];
  },
};
export default config;
