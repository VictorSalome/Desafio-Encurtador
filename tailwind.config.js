/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'vermelho-100': 'var(--vermelho-100)',
        'textoApoio-100': 'var(--textoApoio-100)',
        'lineBackground': 'var(--lineBackground)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

