import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
      colors: {
        "primary-300": "#00e64a",
        "primary-500": "#00be3d",
        "primary-600": "#00ab07",
        "primary-900": "#0b6236",
        "secondary-500": "#180c33",
        "light-100": "#fcfcfc",
        "light-200": "#b7b7b7",
        "dark-400": "#615F5F",
      },
      fontFamily: {
        lufga: ['var(--font-lufga)'],
        garamond: ['var(--font-garamond)'],
      },
      boxShadow: {
        'custom-sm': '0 0.2px 4px 0 rgba(80, 69, 56, .20)',
        'custom': '0 4px 4px 0 rgba(0, 0, 0, .25)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '99': '99',
      },
    },
  },
  plugins: [],
};
export default config;
