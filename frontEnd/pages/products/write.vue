<!--
    Author: Youngjin Kwak
    Start: 12/17/2019
    Update: 12/17/2019
    url: /products/write
    Purpose: Product write vue
 -->
<template>
    <div class="content">
        <Product />
    </div> <!-- content end -->
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
}
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
}

</style>