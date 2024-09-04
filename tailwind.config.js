const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
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
            primary: {
              50: "#E6F2FF", // Azul claro
              100: "#B3DAFF", // Azul suave
              200: "#80C2FF", // Azul intermedio
              300: "#4DA9FF", // Azul más brillante
              400: "#1A91FF", // Azul vibrante
              500: "#0088FF", // Azul fuerte
              600: "#007BFF", // Azul profundo
              700: "#006FFF", // Azul oscuro
              800: "#0060E6", // Azul muy oscuro
              900: "#0052CC", // Azul eléctrico más oscuro
            },
            secondary: {
              50: "#F5E8FF", // Violeta muy claro
              100: "#E0BBFF", // Violeta suave
              200: "#CC8EFF", // Violeta intermedio
              300: "#B862FF", // Violeta más fuerte
              400: "#A536FF", // Violeta vibrante
              500: "#9320E6", // Violeta profundo
              600: "#811ACC", // Violeta oscuro
              700: "#6F15B3", // Violeta muy oscuro
              800: "#5D1099", // Violeta oscuro
              900: "#4B0B80", // Violeta muy profundo
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
        },
      },
    }),
  ],
};
