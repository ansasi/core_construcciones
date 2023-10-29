/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-900": "#111827",
        white: "#fff",
        "neutral-500": "#6b7280",
        "neutral-50": "#f9fafb",
        "neutral-800": "#1f2937",
        lightgray: "#d3d5d7",
        gray: "rgba(0, 0, 0, 0.3)",
        "neutral-700": "#374151",
      },
      spacing: {},
      fontFamily: {
        "body-lg-regular": "Inter",
      },
      borderRadius: {
        xl: "20px",
        "31xl": "50px",
      },
    },
    fontSize: {
      lg: "18px",
      "29xl": "48px",
      sm: "14px",
      base: "16px",
      "17xl": "36px",
      "5xl": "24px",
      xl: "20px",
      "13xl": "32px",
      "11xl": "30px",
      "41xl": "60px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
      mq715: {
        raw: "screen and (max-width: 715px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
