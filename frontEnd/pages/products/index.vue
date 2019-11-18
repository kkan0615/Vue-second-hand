<!--
    Author: Youngjin Kwak
    Start: 11/17/2019
    Update: 11/17/2019
    Purpose: Product list vue
 -->
<template>
    <div>

    </div>
</template>

<script>
export default {
    layout: 'default',
    data() {
        return {
            products: this.$store.state.product_list.products,
        }
    },
}
</script>

<style>

</style>