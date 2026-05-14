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
          primary: '#00BFFF',
          bright: '#38BDF8',
          haze: '#67E8F9',
          surface: '#0F172A',
          deep: '#020617',
          panel: '#111827',
          accent: '#A855F7',
          teal: '#22D3EE',
          slate: '#94A3B8',
          text: '#E2E8F0',
        },
      },
      boxShadow: {
        glow: '0 0 80px rgba(0, 191, 255, 0.18)',
        panel: '0 30px 120px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'cosmic-grid': 'radial-gradient(circle at 10% 10%, rgba(56,189,248,0.14), transparent 20%), radial-gradient(circle at 85% 15%, rgba(168,85,247,0.12), transparent 18%), linear-gradient(180deg, #020617 0%, #090d1a 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
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
