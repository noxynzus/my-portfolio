// tailwind.config.ts
import { CustomTheme } from "./app/configs/styles/themes";

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: CustomTheme.colors,
      fontFamily: CustomTheme.fontFamily,
      fontSize: CustomTheme.fontSize,
      fontWeight: CustomTheme.fontWeight,
      zIndex: CustomTheme.zIndex,
      borderRadius: CustomTheme.borderRadius,
    },
  },
};

export default config;
