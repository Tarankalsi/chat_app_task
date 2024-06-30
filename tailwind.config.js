/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        chatBackground : "#FAF9F4",
        recieverChat : "#1C63D5",
        messageAttachment : "#008000"
      }
    },
  },
  plugins: [],
}