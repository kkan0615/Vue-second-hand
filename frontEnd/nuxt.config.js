/**
 * Author: Youngjin Kwak
 * File name : nuxt.config.js
 * Purpose : change setting of default nuxt
 * Reference : https://ko.nuxtjs.org/guide/configuration/ - nuxt config js main site korean ver
 * Last update: 2019/10/23
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
        ]
    },
    css: [
        '~/css/main.css'
    ],
    /**
     * Moduels
     * '@nuxtjs/axios' - axios
     * '@nuxtjs/dotenv' - dotenv file
     */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/dotenv',
    ]
};