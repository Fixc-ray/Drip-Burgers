import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        drip: {
          black: "#0A0A0A",
          charcoal: "#161616",
          red: "#E31B23",
          cream: "#F4E9D8",
          white: "#FFFDF9",
          grey: "#A5A5A5"
        }
      },
      boxShadow: { drip: "0 24px 70px rgba(0,0,0,.28)" },
      borderRadius: { drip: "1.75rem" }
    }
  },
  plugins: []
} satisfies Config;
