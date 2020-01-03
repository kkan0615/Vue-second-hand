<!--
    Author: Youngjin Kwak
    Start: 10/25/2019
    Update: 01/02/2020
    Purpose: default layout
 -->
<template>
    <v-app>
        <Drawer :drawer="drawer"></Drawer>
        <Bar @changeDrawer="fromBar"></Bar>
        <v-content
        app
        >
            <v-container
            >
                <nuxt />
            </v-container>
        </v-content>
    </v-sheet>
    <Footer />
    </v-app>
</template>

<script>
import Footer from '../components/Footer.vue'
import Bar from '../components/Bar.vue'
import Drawer from '../components/Drawer.vue'

export default {
    data: () => ({
        collapseOnScroll: true,
        drawer: false,
    }),
    components: {
        Footer,
        Bar,
        Drawer,
    },
    head: {
        script: [
            { src: 'https://kit.fontawesome.com/cdc70df69c.js' },
            { scr: '' }
        ],
    },
    methods: {
        onLogOut() {
            this.$store.dispatch('users/logOut')
            .then((res) => {
                alert("Success to log out");
            }).catch((err) => {
                alert(err);
            });
        },
        fromBar(newDrawer) {
            this.drawer = newDrawer;
        }
    },
}
</script>
<!--
<style lang="scss" scoped>
    /*********************************************************************
    *   content
    *   Author: Youngjin Kwak
    *   10/25/2019
    **********************************************************************/
    .content {
        font-family: 'Sunflower', sans-serif;
        padding: 0px 100px 0px 100px;
        margin: 0;
    }

    /*********************************************************************
    *   footer
    *   Author: Youngjin Kwak
    *   10/25/2019
    **********************************************************************/
    .footer {
        clear: both;
        bottom: 0;
        padding: 10px;
        text-align: center;
        font-size: 20px;
        background-color: #18D65A;
        color: white;
    }
</style>
-->