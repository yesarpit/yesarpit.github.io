// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Learnings',
  tagline: 'Life is a learning spree',
  url: 'https://www.arpitsharma.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  markdown: {
    format: 'detect',
  },
  favicon: 'img/favicon.ico',
  organizationName: 'yesarpit', // Usually your GitHub org/user name.
  projectName: 'yesarpit.github.io', // Usually your repo name.

  scripts: [
    {
      src: 'https://cloud.umami.is/script.js',
      'data-website-id': '1a52d815-53ac-41de-a7ec-feea9daa1508', // Replace with your actual website-id
      defer: true,
    },
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/yesarpit/yesarpit.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarCount: "ALL",
          blogSidebarTitle: 'Book Summaries',
          // Please change this to your repo.
          editUrl:
            'https://github.com/yesarpit/yesarpit.github.io/edit/main/',
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
      metadata: [
        { name: 'google-site-verification', content: 'n4BT2lps7uWrOppSQuYPJ5lGwyV0QXYlsg3Xy5hcuNE' },
        { name: 'keywords', content: 'Arpit Sharma, Engineering Executive, PayPal, Fintech Consultant, Fractional CTO, AI Infrastructure Architect, System Design Consultant, Engineering Leadership, High-Frequency Trading, Technical Blog, Pune Engineering Leader' },
        { name: 'description', content: 'Portfolio and Blog of Arpit Sharma, an Engineering Executive specializing in Fintech, AI Infrastructure, and 99.999% availability systems. Available for Fractional CTO and Engineering Consulting.' },
        { name: 'author', content: 'Arpit Sharma' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
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
            label: 'Technical',
          },
          // {to: '/gallery', label: 'Photoactive', position: 'right'},
          { to: '/blog', label: 'Blog', position: 'left' },
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
          // {
          //   title: 'CV',
          //   items: [
          //     {
          //       label: 'CV',
          //       href: '/CV',
          //     },
          //     // {
          //     //   label: 'Insta',
          //     //   to: '/gallery',
          //     // }
          //   ],
          // }
        ],
        copyright: `<b>No</b> Copyright © ${new Date().getFullYear()} Arpit Sharma @yesarpit`,
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
