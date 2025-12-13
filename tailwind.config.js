/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        textColor: {
            'peach': "#ffceaf",
            'purps': "#AA5EF4",
            'bluez': "#7f47ff",
            'blaq': "#000"
        },

        extend: {
            fontFamily: {
                atmos: ['atmos'],
                comfortBold: ["comfortaa-bold"],
                quantify: ["quantify"],
            }
        },
    },
    plugins: [],
}