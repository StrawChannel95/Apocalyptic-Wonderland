// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Apocalyptic Wonderland",
  tagline: "A Wabbajack list for Tale of Two Wastelands.",
  favicon: "",
  url: "",
  baseUrl: "/",
  organizationName: "apocalypticwonderland",
  projectName: "strawchannel95.github.io/apocalyptic-wonderland",
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  plugins: ["docusaurus-plugin-image-zoom"],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            ",
        },
        blog: {
          showReadingTime: false,
          editUrl:
            "",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      stylesheets: ["https://fonts.googleapis.com/icon?family=Material+Icons"],
      // Search bar
      algolia: {
        appId: "PGDR3J962U",
        apiKey: "a62240650a1665512559c9fd6006d035",
        indexName: "wastelandsurvivalguide",
        contextualSearch: false,
      },
      // Image zoom plugin
      zoom: {
        selector: ".markdown :not(em) > img",
        background: {
          light: "rgba(0,0,0,0.3)",
          dark: "rgba(0,0,0,0.5)",
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        config: {},
      },
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      image: "img/social.webp",
      navbar: {
        title: "Apocalyptic Wonderland",
        logo: {
          alt: "Apocalyptic Wonderland Logo",
          src: "",
      
            label: "Straw's Meddling Modding",
            href: "https://discord.gg/JcbZGDeMmC",
          },
          {
            label: "ModdingLinked",
            href: "https://moddinglinked.com",
          },
          {
            label: "Performance Guide",
            href: "https://performance.moddinglinked.com/falloutnv.html",
          },
          {
            label: "SALVO",
            href: "https://salamand3r.fail/salvo",
          },
          {
            label: "TTW Discord",
            href: "https://discord.gg/taleoftwowastelands",
          },
          {
            label: "GECK Wiki",
            href: "https://geckwiki.com",
          },
          {
          },
        ],
        logo: {
          alt: "Tale of Two Wastelands Logo",
          src: "ttw.png",
          href: "https://taleoftwowastelands.com",
        },
        copyright: `Copyright <a href="/docs/important">©</a> ${new Date().getFullYear()} Apocalyptic Wonderland`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ini"],
      },
    }),
};

module.exports = config;
export default config;
