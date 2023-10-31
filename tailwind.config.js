/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    maxWidth: {
      '120px': '120px',
      '100px': '100px',
      '980px': '980px',
    },
    height : {
      '78px': '78px',
      '60px': '60px',
      '90px': '90px',
      '375px': '375px',
      '383px': '383px'
    },
    boxShadow: {
      '3xl': '0px 2px 6px rgba(0, 0, 0, 0.10)',
      'none-custom': 'none'
    },    
    extend: {
      width: {
        '140px': '140px',
        '158px': '158px',
        '600px': '600px',
      },
      spacing: {
        '60px': '60px',
        '40px': '40px',
        '30px': '30px',
        '22px': '22px',
        '25px': '25px',
        '20px': '20px',
        '10px': '10px',
        '7px': '7px',
        '5px': '5px'
      },
      colors: {
        gp: {
          primary: {
            100: '#FFF2EB',
            300: '#FFBD99',
            500: '#FF8949',
            600: '#FF6D1F',
            700: '#F55600',
          },
          life: {
            100: '#FFF7EB',
            300: '#FFD699',
            500: '#FFB548',
            600: '#FFA51F',
            700: '#F59300',
          },
          bank: {
            300: '#60C6A1',
            500: '#1EB27D',
          },
          gray: {
            100: '#FFFFFF',
            200: '#FAFAFA',
            300: '#F0F0F0',
            400: '#E0E0E0',
            500: '#999999',
            600: '#666666',
            700: '#333333',
          },
        },
      },      
    },
  },
  plugins: [],
}