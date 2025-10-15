/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // Professional Blue
        secondary: "#10b981", // Success Green
        accent: "#f59e0b", // Energy Orange
        dark: "#1e293b", // Neutral Dark
        light: "#f8fafc", // Neutral Light
        "text-primary": "#0f172a",
        "text-secondary": "#64748b",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        heading: ["Poppins", "Inter", "sans-serif"],
      },
      fontSize: {
        h1: "clamp(2.5rem, 5vw, 4rem)",
        h2: "clamp(2rem, 4vw, 3rem)",
        h3: "clamp(1.5rem, 3vw, 2rem)",
        body: "clamp(1rem, 2vw, 1.125rem)",
        small: "0.875rem",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0,0,0,0.1)",
        md: "0 4px 6px rgba(0,0,0,0.1)",
        lg: "0 10px 25px rgba(0,0,0,0.15)",
        xl: "0 20px 40px rgba(0,0,0,0.2)",
      },
      borderRadius: {
        card: "8px",
        button: "24px",
        image: "16px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        gradient: "gradient 8s ease infinite",
        "slide-up": "slideUp 0.6s ease-out",
        "fade-in": "fadeIn 0.6s ease-in",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
