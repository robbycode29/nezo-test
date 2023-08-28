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
        '165px': '165px',
        '70px': '70px',
        '134px': '134px',
        '78px': '78px',
        '130px': '130px',
        '212px': '212px',
        '200px': '200px',
        '196px': '196px',
        '120px': '120px',
        '358px': '358px',
        '166px': '166px',
        '197px': '197px',
        '231px': '231px',
        '289px': '289px',
        '228px': '228px',
        '152px': '152px',
        '160px': '160px',
      },
      height: {
        '76px': '76px',
        '44px': '44px',
        '11px': '11px',
        '58px': '58px',
        '18px': '18px',
        '220px': '220px',
        '92px': '92px',
        '1100px': '1100px',
        '36px': '36px',
      },
      colors: {
        '222222': '#222222',
        'EBEBEB': '#EBEBEB',
        'FA4B4B': '#FA4B4B',
        '007FFF': '#007FFF',
        '007FFF26': '#007FFF26',
        '5E6278': '#5E6278',
        '5E627826': '#5E627826',
        'F9F9F9': '#F9F9F9',
        'F2F2F2': '#F2F2F2',
        'D4D4D4': '#D4D4D4',
        'BDBDBD': '#BDBDBD',
        '00D39526': '#00D39526',
        '006D4D': '#006D4D',
        'FF8A00': '#FF8A00',
        'FF8A0026': '#FF8A0026',
        '023F7E': '#023F7E',
        '007FFF26': '#007FFF26',
        'FF8A00': '#FF8A00',
        'FF8A0026': '#FF8A0026',
        'A460BC': '#A460BC',
        'A460BC26': '#A460BC26',
        '00D395': '#00D395',
        '00D39526': '#00D39526',
        'FA4B4B': '#FA4B4B',
        'FA4B4B26': '#FA4B4B26',
        '9296AA': '#9296AA',
      },
      boxShadow: {
        'custom-1': '0px 0px 8px 0px rgba(133, 133, 133, 0.25)',
        'custom-2': '0px 0px 16px 0px rgba(133, 133, 133, 0.25)',
      },
      margin: {
        '24px': '24px',
        '16px': '16px',
        '100px': '100px',
        '1.5px': '1.5px',
      },
      padding: {
        '100px': '100px',
        '22px': '22px',
      },
      borderWidth: {
        '1.5px': '1.5px',
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
