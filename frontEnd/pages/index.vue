<!--
    Author: Youngjin Kwak
    File name and path : product/index.vue
    Start: 11/03/2019
    Update: 11/03/2019
    Purpose: Product list vue
 -->
<template>
    <div>
        <h1>{{ message }}</h1>
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
        }
    },
}
</script>

<style>

</style>