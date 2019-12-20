const getAppRoutes = require('./libs/getRoutes.js')
module.exports = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || 'House Garden Ideas',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Discover House & Garden online, your first stop for the latest interior design ideas, beautiful lifestyle inspiration and delicious food recipes' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: "stylesheet", href: "/assets/libs/bootstrap/dist/css/bootstrap.css" },
            { rel: "stylesheet", href: "/assets/css/icofont/icofont.min.css" },
            { rel: "stylesheet", href: "/assets/css/main.css" },
        ],
        script: [
            { src: "/assets/js/jquery.min.js" },
            { src: "/assets/js/popper.js" },
            { src: "/assets/libs/bootstrap/dist/js/bootstrap.js" },
            { src: "/assets/js/main.js" },
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: 'red' },
    env: {
        baseURL: "http://localhost:8000",
        myDomain: "http://localhost:3000"
    },
    server: {
        port: "4000"
    },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~plugins/catch_axios'
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/sitemap',
        'nuxt-clipboard2',
        '@nuxtjs/onesignal', ['@nuxtjs/component-cache', {
            max: 10000,
            maxAge: 1000 * 60 * 60
        }]
    ],
    sitemap: {
        gzip: true,
        generate: false,
        routes() {
            return getAppRoutes()
        },
        path: "/sitemap.xml",
        cacheTime: 0,
    },
    manifest: {
        name: "House Garden Ideas",
        lang: "en",
        short_name: "H&G Inc",
        icons: [{
                "src": "/icons/icon-192.png",
                "type": "image/png",
                "sizes": "192x192"
            },
            {
                "src": "/icons/icon-512.png",
                "type": "image/png",
                "sizes": "512x512"
            },
        ]
    },
    oneSignal: {
        init: {
            appId: '9ecc579d-5362-490d-9b18-38e3961fac3b',
            allowLocalhostAsSecureOrigin: true,
            // welcomeNotification: {
            //     disable: false
            // }
        }
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: "http://localhost:8000/api/v1",
        headers: {
            common: {
                ApiKey: "123"
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}