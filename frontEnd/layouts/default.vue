<!--
    Author: Youngjin Kwak
    Start: 10/25/2019
    Update: 11/03/2019
    Purpose: default layout
 -->
<template>
    <div>
        <div class="top-nav">
            <nuxt-link to="/">home</nuxt-link>
            <div v-if="me">
                <button @click="onLogOut" v-if="me" >로그아웃</button>
            </div>
            <div v-else>
                <nuxt-link to="/login">로그인</nuxt-link>
                <nuxt-link to="/signUp">회원가입</nuxt-link>
            </div>
        </div> <!-- top-nav end -->
        <div class="content">
            <nuxt />
        </div>
        <div class="footer">
            @Youngjin kwak
        </div> <!-- footer end -->
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    head: {
        script: [
            { src: 'https://kit.fontawesome.com/cdc70df69c.js' },
            { src: 'https://fonts.googleapis.com/css?family=Sunflower:300&display=swap' }
        ],
    }
}
</script>
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