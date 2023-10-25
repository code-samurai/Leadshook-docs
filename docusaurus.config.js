// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Leadshook",
  tagline: "Leadshook Documentation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://leadshook.elmajdoub.live",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
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
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        logo: {
          alt: "Leadshook Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          {
            to: "https://www.leadshook.com/blog/",
            label: "Blog",
            position: "left",
          },
          {
            href: "https://gitlab.leadshook.com/",
            label: "Gitlab",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "RESOURCES",
            items: [
              {
                label: "Blog",
                href: "https://www.leadshook.com/blog/",
              },
              {
                label: "LeadsHook Knowledge Base",
                href: "https://www.leadshook.com/help/",
              },
              {
                label: "Training & Webinars",
                href: "https://www.leadshook.com/trainingwebinars/",
              },
              {
                label: "Courses",
                href: "https://courses.leadshook.com/",
              },
              {
                label: "Lead Capture Forms",
                href: "https://www.leadshook.com/lead-capture-forms/",
              },
              {
                label: "Integrations",
                href: "https://www.leadshook.com/integrations/",
              },
              {
                label: "FAQs",
                href: "https://www.leadshook.com/faq/",
              },
            ],
          },
          {
            title: "COMPANY",
            items: [
              {
                label: "Why LeadsHook",
                to: "https://www.leadshook.com/why-leadshook/",
              },
              {
                label: "Legal Stuff",
                href: "https://www.leadshook.com/legal/",
              },
              {
                label: "Security",
                href: "https://www.leadshook.com/security/",
              },
              {
                label: "Contact Us",
                href: "https://www.leadshook.com/contact-us/",
              },
            ],
          },
        ],
        copyright: `Blitz Brands Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
