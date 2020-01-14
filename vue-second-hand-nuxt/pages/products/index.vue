<!--
    Author: Youngjin Kwak
    Start: 11/17/2019
    Update: 12/22/2019
    Purpose: Product list vue
 -->
<template>
    <v-row>
        <v-container>
            <v-card>
                <v-card-text>
                    <v-text-field
                        dense
                        label="글 제목"
                        v-model="title"
                    ></v-text-field>
                </v-card-text>
                <v-card-text>
                    <v-text-field
                        dense
                        label="최대 금액"
                        v-model="maxPrice"
                    ></v-text-field>
                </v-card-text>
                <v-card-text>
                    <v-text-field
                        dense
                        label="최소 금액"
                        v-model="minPrice"
                    ></v-text-field>
                </v-card-text>
                <v-row>
                    <v-col cols="12" sm="6" md="4">
                        <v-card-text>
                            <v-text-field
                                dense
                                label="hashTag"
                                v-model="hash"
                            ></v-text-field>
                        </v-card-text>
                    </v-col>
                    <v-col ccols="12" sm="6" md="4">
                        <v-card-text>
                            <v-btn
                            icon
                            @click="addHashToList"
                            >
                                <v-icon>fas fa-plus</v-icon>
                            </v-btn>
                        </v-card-text>
                    </v-col>
                </v-row>
                <v-card-text>
                    <v-list dense>
                        <v-subheader>Hash-list</v-subheader>
                        <v-list-item
                        v-for="hashtag in optionHash">
                            <v-list-item-action >
                                <v-icon @click="removeFromList(hashtag)">far fa-minus-square</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>{{ hashtag }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card-text>

                <v-card-actions>
                </v-card-actions>
            </v-card>

        </v-container>
        <v-spacer></v-spacer>
        <v-col
            v-for="product in products"
            cols="12"
            sm="4"
            md="3"
        >
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
                    <div class="overline mb-4" v-for="hashTag in product.ProductControl">{{ hashTag.name }}</div>
                </v-card-text>

                <v-card-actions>
                    <v-list-item class="grow">
                        <v-list-item-avatar color="grey darken-3">
                            <v-img
                                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                            ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>{{ product.author }}</v-list-item-title>
                        </v-list-item-content>

                        <v-row
                        align="center"
                        justify="end"
                        >
                            <v-btn
                            icon
                            >
                                <v-icon>fas fa-shopping-cart</v-icon>
                            </v-btn>
                            <v-btn
                            icon
                            >
                                <v-icon>mdi-share-variant</v-icon>
                            </v-btn>
                        </v-row>
                    </v-list-item>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>

</template>

<script>
export default {
    layout: 'default',
    data() {
        return {
            //products: null,
            limit: 30, /** Limit the products in the page */
            page: 0, /** Current page number */
            optionHash: [], /** Hash list in option */
            hash: '', /** Hash to put in optionHash array */
            minPrice: 0, /** minimum price in option */
            maxPrice: 0, /** maximum price in option */
            title: '', /** title in option */
            hotItems: [],
            hotItemIndex: 0,
            hotItem: null,

        }
    },
    methods: {
        /**
         * Author : Youngjin Kwak
         * Purpose: Get the products based on page and limit
         * 2019/12/21
         */
        load() {
            this.$store.dispatch('product_list/getProducts', {
                limit: this.limit,
                page: this.page,
                optionHash: this.optionHash, /** Hash list in option */
                minPrice: this.minPrice, /** minimum price in option */
                maxPrice: this.maxPrice, /** maximum price in option */
                title: this.title, /** title in option */
            })
            .then(() => {
                this.page += 1;
                console.log(this.products)
                //this.products = this.$store.state.product_list.products;
            }).catch((err) => {
                alert(err);
            });
        },

        more() {
            this.$store.dispatch('product_list/getMoreProducts', {
                limit: this.limit,
                page: this.page,
                optionHash: this.optionHash, /** Hash list in option */
                minPrice: this.minPrice, /** minimum price in option */
                maxPrice: this.maxPrice, /** maximum price in option */
                title: this.title, /** title in option */
            })
            .then(() => {
                this.page += 1;
                //this.products = this.$store.state.product_list.products;
            }).catch((err) => {
                alert(err);
            });
        },

        getHotItem() {
            this.$store.dispatch('product_list/getHotItem')
            .then(() => {
                this.hotItems = this.$store.state.product_list.hotItem;
                this.hotItem = this.hotItems[this.hotItemIndex];
                //this.products = this.$store.state.product_list.products;
            }).catch((err) => {
                alert(err);
            });
        },

        /**
         * Author : Youngjin Kwak
         * Purpose: Add hash to optionHash
         * StartedAt: 2019/12/24
         * UpdatedAt: 2019/12/25
         */
        addHashToList() {
            if(this.hash === '') return;
            /** Check hash in optionHash */
            const exHash = this.optionHash.indexOf(this.hash);
            if(exHash === -1)
                this.optionHash.push(this.hash);
        },

        /**
         * Author : Youngjin Kwak
         * Purpose: remove hash from optionHash
         * StartedAt: 2019/12/24
         * UpdatedAt: 2019/12/25
         */
        removeFromList(hash) {
            /** Find index number for hash in optionHash */
            const search = this.optionHash.indexOf(hash);
            if(search !== -1)
                this.optionHash.splice(search, 1)
        },

        /**********************TEST용 삭제해주세요*********************************************8 */
        getImage () {
            const min = 550
            const max = 560

            return Math.floor(Math.random() * (max - min + 1)) + min
        },
    },
    computed: {
        products() {
            return this.$store.state.product_list.products;
        },
    },
    mounted() {
        this.load();
        this.getHotItem();
    },
}
/*
<div>
    <div class="top-menu">
        <div class="detail_menu">
            <h3>상세검색</h3>
            <label for="title">제목</label>
            <input v-model="title" type="text" required placeholder="제목"> <br>
            <label for="minPrice">최소 값</label>
            <input v-model="minPrice" type="number" required placeholder="0"> <br>
            <label for="maxPrice">최대 값</label>
            <input v-model="maxPrice" type="text" required placeholder="0"> <br>
            <label for="hash">해쉬태그 추가</label> <br>
            <input v-model="hash" type="text" required placeholder="해쉬태그">
            <button class="send" @click="addHashToList()">+</button> <br>
            <div class="detail_hash_list">
                <div class="detail_hash" v-for="hash in optionHash">
                    {{ hash }}
                    <button class="send" @click="removeFromList(hash)">X</button>
                </div>
            </div> <!-- detail_hash_list ends -->
            <button class="send" @click="load()">보내기</button>
        </div> <!-- left_menu ends -->
        <div class="hot_item">
            <h3>Hot item</h3>
            <div class="hot_item_cards" v-if="hotItem">
                <div class="hot_item_card">
                    <img v-bind:src="'http://127.0.0.1:8001/img/{{ product.img }}'">
                    <h3>{{ hotItem.title }}</h3>
                    <p class="price">{{ hotItem.price }}</p>
                </div>
            </div>
        </div> <!-- hot_item ends -->
    </div> <!-- top_menu ends -->
    <div class = "recent_post">
        <div class="row">
            <div class="column" v-for="product in products">
                <div class="card" id="card-product.id">
                    <img v-bind:src="'http://127.0.0.1:8001/img/{{ product.img }}'">
                    <nuxt-link to="{ name: 'products-id', params: { id: product.id }}">
                        <h3>{{ product.title }}</h3>
                    </nuxt-link>
                    <p class="price">{{ product.price }}</p>
                    <p>Some text</p>
                </div>
            </div>
        </div>
        <button class="more">더보기</nuxt-link></button>
        <button class="write"><nuxt-link to="/products/write">글쓰기</nuxt-link></button>
    </div> <!-- Recent_post ends -->
    <div class="page">
    </div> <!-- page ends -->
</div>
*/
</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
}

</style>