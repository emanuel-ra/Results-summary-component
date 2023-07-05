/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: theme => ({
        'hanken-grotesk': [ 'Hanken Grotesk', 'sans-serif'] ,
      }),
      backgroundColor: theme => ({
        'pale-blue' : 'var(--pale-blue)' ,
        'light-lavender' : 'var(--light-lavender)' ,
        'dark-gray-blue' : 'var(--dark-gray-blue)' ,   
      }),
      textColor: theme => ({
        'pale-blue' : 'var(--pale-blue)' ,
      }),
      gradientColorStops: theme => ({
        'light-slate-blue' : 'var(--light-slate-blue)' ,
        'light-royal-blue' : 'var(--light-royal-blue)' ,
      })      
    },
  },
  plugins: [],
}



