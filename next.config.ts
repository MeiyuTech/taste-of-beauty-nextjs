import type { NextConfig } from "next";
const config: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/los-angeles", destination: "/menus", permanent: true },
      { source: "/xiaolongbao", destination: "/vegan-xiaolongbao", permanent: true },
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
        destination: "/vegan-xiaolongbao",
        permanent: true,
      },
    ];
  },
};
export default config;
