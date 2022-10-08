/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,tsx}", "./index.html"],
  mode: 'jit',
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      extend: {
        maxWidth: {
          70: '70%',
        },
        height: {
          "content" : "max-content"
        },
        width: {
            '500': '500px',
            "content" : "max-content"
        },
        colors: {
          primary: 'var(--accent-color)',
          primaryBG: 'var(--bg-color)',
          textPrimary: 'var(--txt-color)',
          textSecondary: 'var(--txt-color-secondary)',
          danger: '#ec4747'
        },
        fontFamily: {
          'montserrat': ['Montserrat'],
        }
      }
    }
}