// styles/theme.ts
type Color = string;
type FontStack = string[];
type Size = string;
type Weight = number;
type Breakpoint = string;
type Shadow = string;
type TransitionValue = string;
type ZIndexValue = number;

interface Colors {
  primary: Color;
  secondary: Color;
  accent: Color;
  background: Color;
  background2: Color;
  text: Color;
  divider: Color;
}

interface FontFamily {
  sans: FontStack;
  heading: FontStack;
}

interface Spacing {
  small: Size;
  medium: Size;
  large: Size;
}

interface FontSize {
  small: Size;
  medium: Size;
  large: Size;
}

interface FontWeight {
  light: Weight;
  regular: Weight;
  medium: Weight;
  semibold: Weight;
  bold: Weight;
}

interface Breakpoints {
  mobile: Breakpoint;
  tablet: Breakpoint;
  desktop: Breakpoint;
}

interface BorderRadius {
  small: Size;
  medium: Size;
  large: Size;
}

interface BoxShadow {
  small: Shadow;
  medium: Shadow;
  large: Shadow;
}

interface Transition {
  default: TransitionValue;
}

interface ZIndex {
  modal: ZIndexValue;
  navbar: ZIndexValue;
}

interface Typography {
  heading: {
    fontFamily: FontStack;
    fontWeight: Weight;
  };
  body: {
    fontFamily: FontStack;
    fontSize: Size;
  };
}

const colors: Colors = {
  primary: "#615FFF",
  secondary: "#00A6F4",
  accent: "#10B981",
  background: "#161614",
  background2:"#2A2A2A",
  text: "#FFFFFF",
  divider: "#B3B3B3",
};

const fontFamily: FontFamily = {
  sans: ["mono"],
  heading: ["mono"],
};

const spacing: Spacing = {
  small: "0.5rem", // 8px
  medium: "1rem", // 16px
  large: "2rem", // 32px
};

const fontSize: FontSize = {
  small: "8px",
  medium: "16px",
  large: "32px",
};

const fontWeight: FontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const breakpoints: Breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

const borderRadius: BorderRadius = {
  small: "4px",
  medium: "8px",
  large: "16px",
};

const boxShadow: BoxShadow = {
  small: "0 2px 4px rgba(0, 0, 0, 0.1)",
  medium: "0 4px 8px rgba(0, 0, 0, 0.2)",
  large: "0 8px 16px rgba(0, 0, 0, 0.3)",
};

const transition: Transition = {
  default: "all 0.3s ease-in-out",
};

const zIndex: ZIndex = {
  modal: 1000,
  navbar: 999,
};

const typography: Typography = {
  heading: {
    fontFamily: fontFamily.heading,
    fontWeight: 600,
  },
  body: {
    fontFamily: fontFamily.sans,
    fontSize: "1rem",
  },
};

export const CustomTheme = {
  colors,
  fontFamily,
  spacing,
  fontSize,
  fontWeight,
  breakpoints,
  borderRadius,
  boxShadow,
  transition,
  zIndex,
  typography,
};
