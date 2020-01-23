<!--
    Author: Youngjin Kwak
    Start: 01/19/2020
    Update: 01/23/2020
    Purpose: HotItems list vue
 -->
<template>
    <v-card height="100%">
        <v-card>
            <v-container grid-list-md text-xs-center fluid v-if="product">
            <v-layout row wrap align-center>
                <v-flex
                align-end>
                        <v-card-actions>
                            <v-btn
                            icon
                            @click="prev()"
                            >
                                <v-icon>fas fa-shopping-cart</v-icon>
                            </v-btn>
                        </v-card-actions>
                </v-flex>
                <v-flex>
                    <v-card>
                        <v-img
                        :src="`https://picsum.photos/200/300?image=${getImage()}`"
                        height="200px"
                        >
                        </v-img>
                        <v-card-title>{{ product.title }}</v-card-title>
                        <v-card-text>
                            <div class="my-4 subtitle-1 black--text text-right">
                                {{ product.price }} 원
                            </div>
                            <!--<div class="overline mb-4" v-for="hashTag in product.ProductControl">{{ hashTag.name }}</div> -->
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex>
                        <v-card-actions>
                            <v-btn
                            icon
                            @click="next()"

                            >
                                <v-icon>fas fa-shopping-cart</v-icon>
                            </v-btn>
                        </v-card-actions>
                </v-flex>
            </v-layout>
            </v-container>
        </v-card>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            index: 0, /** Current index of hot item list */
            length: 0, /** Max size of item list */
            product: null, /** Current detail of hot item (product) */
            list: null,
        }
    },
    methods: {
        load() {
            /*
            this.$store.dispatch('product_list/getHotItem', {
            })
            .then(() => {
                this.list = this.$store.state.product_list.hotItems;
                this.product = this.list[index];
                ++this.index;
            }).catch((err) => {
                console.error(err);
                alert(err);
            });
            */
            this.list = this.$store.state.product_list.hotItems;
            this.product = this.list[this.index];
            this.length = this.list.length;
        },
        next() {
            if(this.index + 1 >= this.length)
                this.index = 0;
            else
                ++this.index;
            this.product = this.list[this.index];
        },
        prev() {
            if(this.index - 1 < 0)
                this.index = this.length - 1;
            else
                --this.index;
            this.product = this.list[this.index];
        },
        /**********************TEST용 삭제해주세요*********************************************8 */
        getImage () {
            const min = 550
            const max = 560

            return Math.floor(Math.random() * (max - min + 1)) + min
        },
    },
    created() {
        this.load();
    },
}
</script>