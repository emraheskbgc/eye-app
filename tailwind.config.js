/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'libre-bodoni': ['Libre Bodoni', 'serif'],
        'lexend': ['Lexend', 'sans-serif']
      },
      backgroundImage: {
        'daire1-bg': "url(/assets/images/daire1.png)",
        'daire2-bg': "url('/assets/images/daire2.png')",
        'daire3-bg': "url('/assets/images/daire3.jpeg')",
        'otherFea1': "url('/assets/images/otherfeatured1.jpeg')",
        'otherFea2': "url('/assets/images/otherfeatured2.png')",
        'otherFea3': "url('/assets/images/otherfeatured3.png')",
        'otherFea4': "url('/assets/images/otherfeatured4.png')",
        
        'footer-bg': "url('/assets/images/footerImage.png')",
        'footer-bg-mobile':"url('/assets/images/footerImageMobile.png')"
      },
      
    },
    colors:{
      grayHead:"#606060",
      grayIcon:"#ffffff",
      bodybg:"#f5f5f5",
      redTitle:"#9b0002",
      blackBg:"#030712",
      darkRed:"#7f2929",
      starYellow:"#ebb84e",
      commentTimeText:"#c3cfd9",
      grayBg:"#eceef0",
      linkedinLogo:"#0E76A8",
      facebookLogo:"#F1FAFF30",
      cardBg:"#919EAB29"
    }
  },
  plugins: [],
};
