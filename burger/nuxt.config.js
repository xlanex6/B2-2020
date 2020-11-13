
export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'Pamplemouss',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css'
      },
      {
        rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Quicksand&display=swap'
      }
    ]
  },
  css: ['~/assets/scss/main.scss','~/assets/scss/button.scss','~/assets/scss/colors.scss','~/assets/scss/utility.scss'
  ],
  plugins: [
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['~/assets/scss/*.scss']
  },
  build: {
  }
}
