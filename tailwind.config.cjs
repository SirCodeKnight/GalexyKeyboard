/** Distinct editorial design system - deliberately avoids generic template looks. */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: '#101820',
        night: '#182430',
        slateblue: '#2c3e50',
        paper: '#f6f3ec',
        cream: '#fbf9f4',
        brass: '#b9852e',
        brassdark: '#8f6410',
        sage: '#5b7b6d',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        key: '0 1px 0 rgba(16,24,32,0.18), 0 2px 4px rgba(16,24,32,0.06)',
        keydown: 'inset 0 1px 2px rgba(16,24,32,0.25)',
        card: '0 1px 2px rgba(16,24,32,0.05), 0 8px 24px -12px rgba(16,24,32,0.18)',
      },
      maxWidth: { content: '72rem' },
    },
  },
  plugins: [],
};
