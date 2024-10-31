/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // NOTE: Update this to include the paths to all of your compoent files.
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    colors: {
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      background: 'rgb(var(--color-background) / <alpha-value>)',
      card: 'rgb(var(--color-card) / <alpha-value>)',
      text: 'rgb(var(--color-text) / <alpha-value>)',
      border: 'rgb(var(--color-border) / <alpha-value>)',
      notification: 'rgb(var(--color-notification) / <alpha-value>)',
    },
  },
  plugins: [
    // Set a default value on the `:root` element
    ({ addBase }) => addBase({
      ':root': {
        '--color-primary': '0 122 255',
        '--color-background': '242 242 242',
        '--color-card': '255 255 255',
        '--color-text': '28 28 30',
        '--color-border': '216 216 216',
        '--color-notification': '255 59 48',
      },

      ':root[class~="dark"]': {
        '--color-primary': '10 132 255',
        '--color-background': '1 1 1',
        '--color-card': '18 18 18',
        '--color-text': '229 229 231',
        '--color-border': '39 39 41',
        '--color-notification': '255 69 58',
      },
    }),
  ],
}
