<!--
    Author: Youngjin Kwak
    Start: 11/17/2019
    Update: 11/17/2019
    Purpose: Product list vue
 -->
<template>
    <div>
        <div class="row">
            <div class="column">
                <div class="card">
                <h3>Card 1</h3>
                <p>Some text</p>
                <p>Some text</p>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <h3>Card 2</h3>
                <p>Some text</p>
                <p>Some text</p>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <h3>Card 3</h3>
                <p>Some text</p>
                <p>Some text</p>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <h3>Card 4</h3>
                <p>Some text</p>
                <p>Some text</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'default',
    data() {
        return {
            products: this.$store.state.product_list.products,
            busy: false,
            limit: 10,
        }
    },
    methods: {
        loadMore() {
            this.busy = true;
            this.$dispatch('product_list/getProduct')
            .then((res) => {
                products = this.$store.state.product_list.products;
                this.busy = false;
            }).catch((err) => {
                alert(err);
                this.busy = false;
            });
            this.busy = false;
        } // load more ends
    },
}
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
}

</style>