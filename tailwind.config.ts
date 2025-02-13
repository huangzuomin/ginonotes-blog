import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        blob: 'blob 7s infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            blockquote: {
              backgroundColor: 'var(--tw-prose-quote-bg)',
              borderRadius: '1rem',
              padding: '1.5rem',
              marginTop: '2rem',
              marginBottom: '2rem',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
              position: 'relative',
              '&::before': {
                content: '"""',
                position: 'absolute',
                left: '-0.75rem',
                top: '-0.75rem',
                fontSize: '2.5rem',
                color: 'var(--tw-prose-quote-marks)',
                opacity: '0.2',
              },
              '&::after': {
                content: '"""',
                position: 'absolute',
                right: '-0.75rem',
                bottom: '-0.75rem',
                fontSize: '2.5rem',
                color: 'var(--tw-prose-quote-marks)',
                opacity: '0.2',
              },
              'p:first-of-type::before': {
                content: 'none',
              },
              'p:last-of-type::after': {
                content: 'none',
              },
            },
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config 