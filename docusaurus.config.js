// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Learnings',
  tagline: 'Life is a learning spree',
  url: 'https://yesarpit.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Arpit', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
         sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount:"ALL",
          blogSidebarTitle: 'All Posts',
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'About Me',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Javascript',
          },
          // {to: '/gallery', label: 'Photoactive', position: 'right'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/yesarpit',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'What Else',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Certifications',
                href: 'https://www.credly.com/badges/f49d873f-2763-4bc2-b28b-4dbfd2875180/public_url',
              },
              {
                label: 'Linked In',
                href: 'http://www.linkedin.com/in/yesarpit',
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              // {
              //   label: 'Insta',
              //   to: '/gallery',
              // }
            ],
          },
        ],
        copyright: `<b>No</b> Copyright © ${new Date().getFullYear()} Arpit Sharma @yesarpit, This is Built with Docusaurus.`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    
    // plugins: [
    //   [
    //     '@docusaurus/plugin-content-docs',
    //     {
    //       id: 'Finance',
    //       // path: 'Finance',
    //       // routeBasePath: 'Finance',
    //       sidebarPath: require.resolve('./sidebarsFinance.js'),
    //       // ... other options
    //     },
    //   ],
    // ]
};





module.exports = config;
