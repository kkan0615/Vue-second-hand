<!--
    Author: Youngjin Kwak
    Start: 11/17/2019
    Update: 12/17/2019
    Purpose: Product list vue
 -->
<template>
    <div>
        <div class="row">
            <div class="column" v-for="product in products">
                <div class="card" id="card-product.id">
                    <img v-bind:src="'http://127.0.0.1:8001/img/{{ product.img }}'">
                    <h3>{{ product.title }}</h3>
                    <p>Some text</p>
                    <p>Some text</p>
                </div>
            </div>
        </div>

        <button><nuxt-link to="/products/write">글쓰기</nuxt-link></button>
    </div>
</template>

<script>
export default {
    layout: 'default',
    data() {
        return {
            //products: null,
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
        }, // load more ends
        loadOnce() {
        this.$store.dispatch('product_list/getProducts')
        .then(() => {
           // this.products = this.$store.state.product_list.products;
        }).catch((err) => {
            alert(err);
        });
        }
    },
    computed: {
        products() {
            return this.$store.state.product_list.products;
        }
    },
    mounted() {
        this.loadOnce();
    },
}
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
}

</style>