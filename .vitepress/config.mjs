import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Nature'S Healing Path",
  description: "A modern blog dedicated to alternative natural medicine, offering step-by-step solutions using nature's medicine to tackle common health issues with evidence-based, holistic approaches.",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'About', link: '/about' },
      { text: 'Contact', link: '/contact' },
      { text: 'Remedies', link: '/remedies' }
    ],
    socialLinks: [],
    footer: {
      message: 'Built with VitePress & AI',
      copyright: `Copyright © ${new Date().getFullYear()} Nature'S Healing Path`
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#228B22' }],
    ['link', { rel: 'stylesheet', href: '/styles.css' }]
  ],
  appearance: 'dark',
  lastUpdated: true
})
