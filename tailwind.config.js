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
            colors: {
                brand: 'var(--primary-color)',
            },
        },
    },
    plugins: [],
};
