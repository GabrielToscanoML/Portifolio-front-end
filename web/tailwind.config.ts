import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-kanit)',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '16': '4rem',
      },
      padding: {
        '160': '160px',
      },
      height: {
        '600': '600px',
      }
    },
  },
  plugins: [],
}
export default config
