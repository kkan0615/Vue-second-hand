<!--
    FileName: Footer.vue
    Author: Youngjin Kwak
    Start: 01/02/2020
    Update: 01/02/2020
    Purpose: Footer
 -->
<template>
    <v-footer
        app>
        {{ msg }}
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        msg: '&copy Youngjin Kwak'
    }),
}
</script>
<style lang="scss" scoped>
</style>