// tailwind.config.ts
import { CustomTheme } from "./app/configs/styles/themes";

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
      },
      keyframes: {
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
