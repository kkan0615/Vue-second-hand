<!--
    Author: Youngjin Kwak
    Start: 11/02/2019
    Update: 11/03/2019
    Purpose: Sign Up form page
 -->
<template>
    <div class="content">
        <!-- signup from 시작 -->
        <form ref="form" @submit.prevent="onSubmitForm" class="signup-form">
            <h1>Sign Up</h1>
            <label for="Username">Username</label> <br>
            <input v-model="username" type="text" required placeholder="아이디"> <br>
            <label for="email">Email</label> <br>
            <input v-model="email" type="email" required placeholder="이메일"> <br>
            <label for="password">Password</label> <br>
            <input v-model="password" type="password" required placeholder="패스워드"> <br>
            <label for="nickname">Nickname</label> <br>
            <input v-model="nickname" type="text" required placeholder="닉네임"> <br>
            <button type="submit" class="submit-button">Sign Up</button>
        </form>
        <hr> <!-- 점선 -->
        <div class="bottom">
            <nuxt-link to="/login">로그인하러가기</nuxt-link>
        </div> <!-- bottom end -->
    </div> <!-- content end -->
</template>

<script>
export default {
    layout: 'sign-login-form',
    data() {
        return {
            username: '', /* Username */
            email: '', /* email */
            nickname: '', /* Nickname */
            password: '', /* Password */
        }
    },
    methods: {
        /* When use submit form it will be run */
        onSubmitForm() {
            this.$store.dispatch('users/signUp', {
                username: this.username,
                email: this.email,
                nickname: this.nickname,
                password: this.password
            }).then(() => {
               this.$router.push({
                   path: '/login',
               });
            }).catch((err) => {
                console.error(err);
                alert('Sign up fail' + err);
            });
        }
    },
}
</script>

<style lang="scss" scoped>
    /*********************************************************************
    *   content
    *   Author: Youngjin Kwak
    *   StartedAT: 11/03/2019
    *   UpdatedAt:  11/03/2019
    *   Including:
    *               bottom: Part of bottom
    *               a: Link css
    **********************************************************************/
.content {
    font-family: 'Sunflower', sans-serif;
    //text-align: center;
    padding: 10px 500px 10px 500px;
    margin: 0;
    .bottom {
        text-align: center;
    }
    a {
        text-decoration: none;
        color: black;
    }
    a:hover {
        color: #18D65A;
    }
    a:visited {
        text-decoration: none;
        color: black;
    }
}
    /*********************************************************************
    *   signup-form
    *   Author: Youngjin Kwak
    *   StartedAT: 11/03/2019
    *   UpdatedAt:  11/03/2019
    *   Purpose: Sign Up from css
    *   Including:
    *               label: label for each input boxes
    *               input: input box css
    **********************************************************************/
.signup-form {

    h1 {
        text-align: center;
    }
    label {
        margin: 50px 0px 50px 0px;
        text-align: center;
        font-size: 30px;
    }
    input {
        margin: 10px 0px 10px 0px;
        width: 96.6%;
        height: 20px;
        font-size: 20px;
        padding: 10px;
        //box-sizing: border-box;
        border: 2px solid #1FBF84;
        border-top: none;
        border-right: none;
        border-left: none;
    }
    input:focus {
        border: 2px solid #1FBF84;
    }
    .submit-button {
        width: 100%;
        background-color: #18D65A;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
}
</style>