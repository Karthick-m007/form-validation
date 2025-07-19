/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '50': '#eef9ff',
          '100': '#d9f0ff',
          '200': '#bce5ff',
          '300': '#8ed6ff',
          '400': '#59bdff',
          '500': '#339ffe',
          '600': '#1c81f4',
          '700': '#1569e0',
          '800': '#1855b5',
          '900': '#1b4f99',
          '950': '#142e57',
        },
        secondary: {
          '50': '#f0f9ff',
          '100': '#e0f2fe',
          '200': '#b9e5fe',
          '300': '#7cd1fd',
          '400': '#36bbfa',
          '500': '#0ca3eb',
          '600': '#0082c9',
          '700': '#0167a3',
          '800': '#065786',
          '900': '#0b496f',
          '950': '#072e4a',
        },
      },
    },
  },
  plugins: [],
}
