/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bcd7ff',
          300: '#8cbcff',
          400: '#5596ff',
          500: '#2970ff',
          600: '#1a51f7',
          700: '#1240e3',
          800: '#1536b8',
          900: '#173192',
          950: '#121d57',
        },
        secondary: {
          50: '#edfcfd',
          100: '#d3f7fa',
          200: '#aeecf5',
          300: '#75dbed',
          400: '#38c1de',
          500: '#1ca2c4',
          600: '#1882a6',
          700: '#196887',
          800: '#1b556d',
          900: '#1b475d',
          950: '#0e2e3e',
        },
        accent: {
          50: '#fff7ed',
          100: '#ffeed3',
          200: '#fdd8a7',
          300: '#fabb70',
          400: '#f79339',
          500: '#f37113',
          600: '#e25109',
          700: '#bb350b',
          800: '#952b10',
          900: '#792610',
          950: '#411008',
        },
        success: {
          50: '#eefdf4',
          100: '#d6fae3',
          200: '#b0f2ca',
          300: '#7be5a9',
          400: '#41cf84',
          500: '#21b16a',
          600: '#158f57',
          700: '#137149',
          800: '#125a3c',
          900: '#114a33',
          950: '#07291d',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef4c7',
          200: '#fee989',
          300: '#fdd54b',
          400: '#fcc021',
          500: '#f5a10a',
          600: '#db7c06',
          700: '#b75a0a',
          800: '#944610',
          900: '#793a12',
          950: '#421d08',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        neutral: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}