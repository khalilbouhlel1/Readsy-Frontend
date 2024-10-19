/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        poiretone: ['Poiret One', 'serif'],
        meriweather: ['Merriweather', 'serif']
      },
      colors: {
        'primary': "#FAF9F6",           // A soft off-white background for a clean reading experience.
        "dark-slate": "#2C3A47",        // A deep slate color for text, ensuring good contrast and readability.
        "soft-coral": "#FF6B6B",        // A muted coral for accents and buttons, adding a touch of warmth without being too bright.
        "pale-sage": "#E5E8E1",         // A light, calming green for background sections or borders.
        "lavender-gray": "#BFBFC4",     // A soft grayish-purple for secondary elements like card backgrounds or footers.
        "light-sand": "#F1E9D7",        // A light beige for subtle contrast between sections.
        "white-400": "rgba(255, 255, 255, 0.80)" // Translucent white for overlays, ensuring readability over backgrounds.
      },
      
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}
