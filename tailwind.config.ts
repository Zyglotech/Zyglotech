import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'Geist', 'Satoshi', 'system-ui', 'sans-serif'],
      },
      colors: {
        zyglo: {
          bg: '#04050c',
          surface: '#121827',
          panel: '#0f172a',
          accent: '#7c3aed',
          highlight: '#22d3ee',
          blue: '#38bdf8',
          slate: '#94a3b8',
          text: '#f8fafc',
          muted: '#cbd5e1',
        },
      },
      boxShadow: {
        glow: '0 0 90px rgba(56, 189, 248, 0.18)',
        panel: '0 30px 120px rgba(0, 0, 0, 0.35)',
        soft: '0 24px 80px rgba(15, 23, 42, 0.55)',
      },
      backgroundImage: {
        'cosmic-grid': 'radial-gradient(circle at 10% 10%, rgba(56,189,248,0.16), transparent 20%), radial-gradient(circle at 85% 15%, rgba(168,85,247,0.14), transparent 18%), linear-gradient(180deg, #04050c 0%, #090c15 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
