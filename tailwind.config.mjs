/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#802e2f',
        'primary-border': '#98504d',
        secundary: '#0099db',
        success: '#2e807f',
        'success-hover': '#296a69',
        'success-ring': '#9abebd',
        cancel: '#db4200',
        info: '#00ffff',
        danger: '#ff6624',
        'background-dark': '#000000'
      }
    }
  }
}
