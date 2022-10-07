/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    content: ['./public/**/*.html', 'src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            borderWidth: {
                1: '1px',
            },
            colors: {
                brand: 'var(--primary-color)',
            },
        },
    },
    plugins: [],
};
