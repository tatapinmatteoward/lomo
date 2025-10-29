/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.md",
    "./blog/**/*.md",
    "./**/*.md",
    "./.vitepress/**/*.{js,ts,vue}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#228B22',
        secondary: '#FFD700'
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
          }
        }
      }
    }
  },
  plugins: []
}
