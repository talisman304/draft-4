import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1020",
        haze: "rgba(255,255,255,0.08)"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(0,0,0,0.25)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
} satisfies Config;
