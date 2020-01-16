<!--
    FileName: Drawer.vue
    Author: Youngjin Kwak
    Start: 01/02/2020
    Update: 01/02/2020
    Purpose: Drawer
 -->
<template>
    <v-navigation-drawer
        app
        v-model="drawer">
        <v-list dense>
            <v-subheader>MENU</v-subheader>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-home</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-action>
                    <v-icon>mdi-contact-mail</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>Contact</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props: {
        drawer: Boolean,
    },
    data: () => ({
    }),
}
</script>
<style lang="scss" scoped>
</style>