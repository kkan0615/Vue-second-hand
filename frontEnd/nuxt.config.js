/**
 * Author: Youngjin Kwak
 * File name : nuxt.config.js
 * Purpose : change default nuxt js setting
 * Reference : https://ko.nuxtjs.org/guide/configuration/ - nuxt config js main site korean ver
 *              https://ko.nuxtjs.org/examples/middleware - nuxt js examples from offical site
 * startedAt: 10/23/2019
 * Last update: 11/04/2019
 */

module.exports = {
    /**
     * Head
     */
    head: {
        titleTemplate: 'Share market',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Meta description' }
        ],
    },
    css: [
        '~/css/main.scss'
    ],
    /**
     * Moduels
     * '@nuxtjs/axios' - axios
     * '@nuxtjs/dotenv' - dotenv file
     */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/dotenv',
    ],

    axios: {
        proxy: true,
    },
};