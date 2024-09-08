import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DataMinder",
  description: "Mind your data LOCALLY and sync to the cloud.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'User Manual', link: '/user-manual' },
          { text: 'Tech Manual', link: '/technical-manual' },
          { text: 'Tech Stack', link: '/stack' },
          { text: 'Project Roadmap', link: '/project/status' },
        ]
      },
      {
        text: 'Status',
        link: '/project/status'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/winkersbrian/dataminder' }
    ]
  }
})
