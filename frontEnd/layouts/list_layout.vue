<!--
    Author: Youngjin Kwak
    Start: 12/20/2019
    Update: 12/20/2019
    Purpose: layout for list
 -->
<template>
    <div>
        <div class="topnav">
            <nuxt-link to="/">home</nuxt-link>
            <div class="dropdown" v-if="me">
                <button @click="onLogOut" v-if="me" >로그아웃</button>
            </div>
            <div class="dropdown" v-else>
                <button class="dropbtn">
                    로그인하기
                </button>
                <div class="dropdown-content">
                    <nuxt-link to="/login">로그인</nuxt-link>
                    <nuxt-link to="/signUp">회원가입</nuxt-link>
                </div>
            </div>
            <nuxt-link to="/products">최신순</nuxt-link>
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
            { scr: '' }
        ],
    },
    computed: {
        me() {
            return this.$store.state.users.user;
        }
    },
    methods: {
        onLogOut() {
            this.$store.dispatch('users/logOut')
            .then((res) => {
                alert("Success to log out");
            }).catch((err) => {
                alert(err);
            });
        }
    },
}
</script>
<style lang="scss" scoped>
    /*********************************************************************
    *   content
    *   Author: Youngjin Kwak
    *   12/20/2019
    **********************************************************************/
    .content {
        font-family: 'Sunflower', sans-serif;
        padding: 0px 10px 0px 10px;
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