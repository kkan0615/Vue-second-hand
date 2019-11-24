<!--
    Author: Youngjin Kwak
    Start: 11/17/2019
    Update: 11/17/2019
    Purpose: Product list vue
 -->
<template>
    <div>
        <Product />
    </div>
</template>

<script>
import Product from '~/components/product';

export default {
    layout: 'default',
    components: {
        Product,
    },
    data() {
        return {
            message: '',
        }
    },
    methods: {
    },
}
</script>

<style lang="scss" scoped>

</style>