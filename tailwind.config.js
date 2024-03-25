/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyBg: "#fff",
        blue: "#0a327b",
        red: "#f65552",
        gray: "#5e6778",
        black: "#1c202b",
        messageBorder: "#dde7ee",
        unread: "#f7fafd",
      },
    },
  },
  plugins: [],
};
