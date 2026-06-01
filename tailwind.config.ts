import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: "#7B1A00",
          deep: "#3D0800",
        },
        saffron: "#E07820",
        parchment: "#FDF3DC",
        amber: "#C8A878",
        brown: "#2D1400",
        income: "#2E7D32",
        expense: "#C62828",
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        kannada: ["var(--font-noto-kannada)", "serif"],
        sans: ["var(--font-source-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
