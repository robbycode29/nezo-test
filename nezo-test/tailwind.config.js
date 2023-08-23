module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '280px': '280px',
        '1640px': '1640px',
        '400px': '400px',
        '396px': '396px',
        '34px': '34px',
        '13px': '13px',
        '210px': '210px',
        '44px': '44px',
        '190px': '190px',
        '18px': '18px',
        '185px': '185px',
        '342px': '342px',
      },
      height: {
        '76px': '76px',
        '44px': '44px',
        '11px': '11px',
        '58px': '58px',
        '18px': '18px',
        '220px': '220px',
      },
      colors: {
        '222222': '#222222',
        'EBEBEB': '#EBEBEB',
        'FA4B4B': '#FA4B4B',
        '007FFF': '#007FFF',
        '5E6278': '#5E6278',
        'F9F9F9': '#F9F9F9',
      },
      boxShadow: {
        'custom-1': '0px 0px 8px 0px rgba(133, 133, 133, 0.25)'
      },
      margin: {
        '24px': '24px',
        '16px': '16px',
        '100px': '100px',
      },
      padding: {
        '100px': '100px',
      },
      fontSize: {
        '10px': '10px',
        '12px': '12px',
        '16px': '16px',
      },
      animation: {
        'ring': 'swing 0.5s ease-in-out 2',
        'spin-fast': 'spin 1s 1',
        'grow-profile': 'growprofile 0.3s 1',
        'ping-custom': 'pingcustom 1s 1',
      },
      keyframes: {
        swing: {
          '0%, 50%': {
            transform: 'rotate(-15deg)'
          },
          '50%, 100%': {
            transform: 'rotate(10deg)'
          },
          '100%': {
            transform: 'rotate(-15deg)'
          },
        },
        growprofile: {
          '0%, 50%': {
            transform: 'scale(0%)',
            opacity: 0.2,
          },
          '50%, 100%': {
            transform: 'scale(100%)',
            opacity: 0.05,
          },
          '100%': {
            transform: 'scale(100%)',
            opacity: 0,
          },
        },
        pingcustom: {
          '0%, 50%': {
            transform: 'scale(100%)',
          },
          '50%, 100%': {
            transform: 'scale(200%)',
            opacity: 0.05,
          },
          '100%': {
            transform: 'scale(200%)',
            opacity: 0,
          },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [],
}
