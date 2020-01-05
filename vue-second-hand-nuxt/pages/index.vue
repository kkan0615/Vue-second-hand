<!--
    Author: Youngjin Kwak
    File name and path : product/index.vue
    Start: 11/03/2019
    Update: 11/15/2019
    Purpose: Product list vue
 -->
<template>
    <div>
        <h1>{{ message }}</h1>
        <h1 v-if="me">{{ user.nickname }}</h1>
        <div class = "recentProducts">
        </div> <!-- recentProducts end  -->
        <div class = "hotProducts">
        </div> <!-- hotProducts end  -->
        <button v-on:click="test()">test</button>
    </div>
</template>

<script>
export default {
    layout: 'default',
    data() {
        return {
            recentProducts: null, /* 최근 올라온 상품 순 10개까지만 */
            hotProducts: null, /* 많이 스크랩된 순서 10개까지만  */
            message: "helloWord",
            user: this.$store.state.users.user,
        }
    },
    computed: {
        me() {
            return this.$store.state.users.user;
        }
    },
    methods: {
        test() {
            this.$store.dispatch('product_list/getByHashTag', {
                name: 'test',
            })
            .then((res) => {
                console.log(res);
            }).catch((err) => {
                alert(err);
            });
        }
    },
}
</script>

<style>

</style>