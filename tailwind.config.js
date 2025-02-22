/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"];
export const theme = {
  extend: {
    animation: {
      gradient: 'gradientShift 3s ease infinite',
    },
  },
};
export const plugins = [];
