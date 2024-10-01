const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Space Mono", "monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "#008080", // Teal (base)
          50: "#E0F7F7", // Teal muy claro
          100: "#B3EDED", // Teal suave
          200: "#80E3E3", // Teal intermedio
          300: "#4DD9D9", // Teal más brillante
          400: "#26CFCF", // Teal vibrante
          500: "#00C5C5", // Teal fuerte
          600: "#00B3B3", // Teal profundo
          700: "#009999", // Teal oscuro
          800: "#007F7F", // Teal muy oscuro
          900: "#006666", // Teal eléctrico más oscuro
        },
        secondary: {
          DEFAULT: "#4DA94D", // Verde más brillante (base)
          50: "#E6F2E6", // Verde claro
          100: "#B3DAB3", // Verde suave
          200: "#80C280", // Verde intermedio
          300: "#4DA94D", // Verde más brillante
          400: "#1A911A", // Verde vibrante
          500: "#008800", // Verde fuerte
          600: "#007B00", // Verde profundo
          700: "#006F00", // Verde oscuro
          800: "#006000", // Verde muy oscuro
          900: "#005200", // Verde eléctrico más oscuro
        },
      }
    },
  },
  plugins: [],
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "futuristic-minimalist": {
          extend: "dark", // Extiende un tema oscuro base
          colors: {
            // Layout
            background: "#0A0A0A", // Negro profundo para el fondo
            foreground: "#ECEDEE", // Color claro para el texto y elementos destacados
            divider: "rgba(255, 255, 255, 0.1)", // Línea divisoria sutil
            focus: "#0096FF", // Azul eléctrico para el foco

            // Content
            content1: "#101010", // Gris muy oscuro
            content2: "#1C1C1E", // Gris oscuro con profundidad
            content3: "#2C2C2E", // Gris medianamente oscuro
            content4: "#3A3A3C", // Gris más claro

            // Base colors
            default: {
              50: "#1A1A1D", // Gris oscuro para capas más bajas
              100: "#2C2C2E", // Gris oscuro base
              200: "#3A3A3C", // Gris un poco más claro
              300: "#4B4B4D", // Gris intermedio
              400: "#5B5B5D", // Gris claro
              500: "#6C6C6E", // Gris para elementos destacados
              600: "#7D7D7F", // Gris un poco más claro
              700: "#8D8D8F", // Gris claro
              800: "#9D9D9F", // Gris muy claro
              900: "#ADADAF", // Gris más claro
            },
            success: {
              50: "#E9FBEF", // Verde muy claro
              100: "#C4F4D4", // Verde suave
              200: "#A0EABA", // Verde intermedio
              300: "#7BE09F", // Verde fuerte
              400: "#55D685", // Verde vibrante
              500: "#38CC6A", // Verde neón
              600: "#31B85F", // Verde profundo
              700: "#29A455", // Verde oscuro
              800: "#22804A", // Verde muy oscuro
              900: "#1A5C3F", // Verde profundo
            },
            warning: {
              50: "#FFF4CC", // Amarillo muy claro
              100: "#FFE699", // Amarillo suave
              200: "#FFD966", // Amarillo intermedio
              300: "#FFCC33", // Amarillo fuerte
              400: "#FFBF00", // Amarillo vibrante
              500: "#E6AC00", // Amarillo profundo
              600: "#CC9900", // Amarillo oscuro
              700: "#B38600", // Amarillo muy oscuro
              800: "#997300", // Amarillo oscuro
              900: "#805F00", // Amarillo muy profundo
            },
            danger: {
              50: "#FFE5E8", // Rojo muy claro
              100: "#FFB3B8", // Rojo suave
              200: "#FF8088", // Rojo intermedio
              300: "#FF4D58", // Rojo fuerte
              400: "#FF1A28", // Rojo vibrante
              500: "#E6000F", // Rojo profundo
              600: "#CC000D", // Rojo oscuro
              700: "#B3000B", // Rojo muy oscuro
              800: "#990009", // Rojo oscuro
              900: "#800007", // Rojo muy profundo
            },
          },
          fontSizes: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem",
            "7xl": "5rem",
            "8xl": "6rem",
            "9xl": "8rem",
          },
        },
      },
      "futuristic-minimalist-light": {
        extend: "light", // Extiende un tema claro base
        colors: {
          // Layout
          background: "#FFFFFF", // Blanco para el fondo
          foreground: "#1A1A1A", // Negro profundo para el texto y elementos destacados
          divider: "rgba(0, 0, 0, 0.1)", // Línea divisoria sutil
          focus: "#0096FF", // Azul eléctrico para el foco

          // Content
          content1: "#F5F5F5", // Gris muy claro
          content2: "#E0E0E0", // Gris claro con profundidad
          content3: "#CCCCCC", // Gris medianamente claro
          content4: "#B8B8B8", // Gris más oscuro

          // Base colors
          default: {
            50: "#F0F0F0", // Gris muy claro para capas más bajas
            100: "#E0E0E0", // Gris claro base
            200: "#D0D0D0", // Gris un poco más oscuro
            300: "#C0C0C0", // Gris intermedio
            400: "#B0B0B0", // Gris oscuro
            500: "#A0A0A0", // Gris para elementos destacados
            600: "#909090", // Gris un poco más oscuro
            700: "#808080", // Gris oscuro
            800: "#707070", // Gris muy oscuro
            900: "#606060", // Gris más oscuro
          },
          success: {
            50: "#E9FBEF", // Verde muy claro
            100: "#C4F4D4", // Verde suave
            200: "#A0EABA", // Verde intermedio
            300: "#7BE09F", // Verde fuerte
            400: "#55D685", // Verde vibrante
            500: "#38CC6A", // Verde neón
            600: "#31B85F", // Verde profundo
            700: "#29A455", // Verde oscuro
            800: "#22804A", // Verde muy oscuro
            900: "#1A5C3F", // Verde profundo
          },
          warning: {
            50: "#FFF4CC", // Amarillo muy claro
            100: "#FFE699", // Amarillo suave
            200: "#FFD966", // Amarillo intermedio
            300: "#FFCC33", // Amarillo fuerte
            400: "#FFBF00", // Amarillo vibrante
            500: "#E6AC00", // Amarillo profundo
            600: "#CC9900", // Amarillo oscuro
            700: "#B38600", // Amarillo muy oscuro
            800: "#997300", // Amarillo oscuro
            900: "#805F00", // Amarillo muy profundo
          },
          danger: {
            50: "#FFE5E8", // Rojo muy claro
            100: "#FFB3B8", // Rojo suave
            200: "#FF8088", // Rojo intermedio
            300: "#FF4D58", // Rojo fuerte
            400: "#FF1A28", // Rojo vibrante
            500: "#E6000F", // Rojo profundo
            600: "#CC000D", // Rojo oscuro
            700: "#B3000B", // Rojo muy oscuro
            800: "#990009", // Rojo oscuro
            900: "#800007", // Rojo muy profundo
          },
        },
        fontSizes: {
          xs: "0.75rem",
          sm: "0.875rem",
          base: "1rem",
          lg: "1.125rem",
          xl: "1.25rem",
          "2xl": "1.5rem",
          "3xl": "1.875rem",
          "4xl": "2.25rem",
          "5xl": "3rem",
          "6xl": "4rem",
          "7xl": "5rem",
          "8xl": "6rem",
          "9xl": "8rem",
        },
      },
    }),
  ],
};
