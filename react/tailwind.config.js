/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "background": "#fdfbf7",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f7f3ed",
        "surface-container": "#f1ede6",
        "surface-container-high": "#ebe6dd",
        "primary": "#6c5a00",
        "primary-container": "#ffd709",
        "on-primary-container": "#453900",
        "secondary": "#5a6e5a",
        "secondary-container": "#e2ede2",
        "on-secondary-container": "#1d2e1d",
        "on-surface": "#2d2f2f",
        "on-surface-variant": "#5a5c5c",
        "outline-variant": "#d4d6d6",
      },
      "borderRadius": {
        "DEFAULT": "1.25rem",
        "lg": "2.5rem",
        "xl": "4rem",
        "full": "9999px"
      },
      "fontFamily": {
        "headline": ["Manrope"],
        "body": ["Inter"],
        "label": ["Inter"]
      }
    }
  },
  plugins: [],
}