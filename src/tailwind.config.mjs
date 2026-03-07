/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ['0.75rem', { lineHeight: '1.25', letterSpacing: '0.05em', fontWeight: '400' }],
                sm: ['0.875rem', { lineHeight: '1.3', letterSpacing: '0.05em', fontWeight: '400' }],
                base: ['1rem', { lineHeight: '1.5', letterSpacing: '0.05em', fontWeight: '400' }],
                lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '0.05em', fontWeight: '400' }],
                xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '0.05em', fontWeight: '700' }],
                '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '700' }],
                '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '0.05em', fontWeight: '700' }],
                '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '0.05em', fontWeight: '700' }],
                '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '0.05em', fontWeight: '700' }],
                '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '0.05em', fontWeight: '700' }],
                '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '0.05em', fontWeight: '700' }],
                '8xl': ['6rem', { lineHeight: '1.05', letterSpacing: '0.05em', fontWeight: '700' }],
                '9xl': ['8rem', { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '700' }],
            },
            fontFamily: {
                heading: "madefor-display",
                paragraph: "helvetica-w01-roman"
            },
            colors: {
                'accent-c-t-a': '#00ff9f',
                'cosmic-teal': '#00ff9f',
                'cosmic-lime': '#39ff14',
                'cosmic-magenta': '#ff00ff',
                'cosmic-purple': '#c300ff',
                'cosmic-pink': '#ff69b4',
                'cosmic-yellow-green': '#ccff00',
                'nebula-purple': '#9d4edd',
                'nebula-pink': '#ff006e',
                'nebula-cyan': '#00d9ff',
                'nebula-violet': '#7209b7',
                'nebula-magenta': '#e0aaff',
                'nebula-deep-blue': '#0a0e27',
                'nebula-bright-blue': '#3a86ff',
                'nebula-accent-orange': '#ff9500',
                destructive: '#ff0000',
                'destructive-foreground': '#ffffff',
                background: '#000000',
                secondary: '#0a0015',
                foreground: '#e0e7ff',
                'secondary-foreground': '#e0e7ff',
                'primary-foreground': '#e0e7ff',
                primary: '#0a0015'
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
