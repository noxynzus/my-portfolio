// tailwind.config.ts
import { CustomTheme } from "./app/configs/styles/themes";

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#161614',
      },
      fontFamily: CustomTheme.fontFamily,
      fontSize: CustomTheme.fontSize,
      fontWeight: CustomTheme.fontWeight,
      zIndex: CustomTheme.zIndex,
      borderRadius: CustomTheme.borderRadius,
      animation: {
        "gradient-x": "gradient-x 3s ease infinite",
        "marquee": "marquee 25s linear infinite",
        "marquee2": "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },

        "gradient-x": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
      },
    },

    plugins: [],
  },
};

export default config;
