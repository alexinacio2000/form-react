import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'blue-bg': '#1784A3',
        'title': '#text-amber-900',
        'btn': '#020617',
        'Mensagem': '#f8fafc'
      },
      spacing:{
        '580': '580px',
        '380': '380px'
      }
    },
  },
  plugins: [],
};
export default config;
