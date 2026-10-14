/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: ['selector', '[data-theme="dark"]'],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        textColor: {
            'fg': "var(--c-fg)",
            'peach': "var(--c-peach)",
            'purps': "var(--c-purps)",
            'bluez': "var(--c-bluez)",
            'blaq': "var(--c-blaq)",
            'pinkz': "var(--c-pinkz)",
            'tealz': "var(--c-tealz)",
            'grayz': "var(--c-grayz)",
            'grayzDark': "var(--c-grayzDark)",
            'offWhitez': "var(--c-offWhitez)",
            'yellowz': "var(--c-yellowz)",
        },
        borderColor: {
            'peach': "var(--c-peach)",
            'purps': "var(--c-purps)",
            'bluez': "var(--c-bluez)",
            'blaq': "var(--c-blaq)",
            'pinkz': "var(--c-pinkz)",
            'tealz': "var(--c-tealz)",
            'grayz': "var(--c-grayz-border)",
            'grayzDark': "var(--c-grayzDark)",
            'offWhitez': "var(--c-offWhitez)",
            'yellowz': "var(--c-yellowz)",
        },

        extend: {
            fontFamily: {
                atmos: ['atmos'],
                comfortBold: ["comfortaa-bold"],
                quantify: ["quantify"],
                neon: ["neon"],
                liquidsky: ["liquidsky"],
                tumsmelted: ["tumsmelted"]
            }
        },


    },
    plugins: [],
}