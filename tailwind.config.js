module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
// https://tailwindcss.com/docs/configuration

// One option we want to edit is purge, which will help Tailwind remove unused styles from the 
// stylesheets which will speed up your website.