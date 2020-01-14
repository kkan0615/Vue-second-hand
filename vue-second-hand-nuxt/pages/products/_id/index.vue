<!--
    Author: Youngjin Kwak
    Start: 12/27/2019
    Update: 12/27/2019
    Purpose: Page for product
 -->
 <template>
    <v-container  grid-list-md text-xs-center fluid v-if="product">
        <v-layout row wrap>
            <v-flex>
                <v-card>
                    <v-img
                    :src="`https://picsum.photos/200/300?image=${getImage()}`"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="300px"
                    >
                    </v-img>
                </v-card>
            </v-flex>
            <v-flex>
                <v-card height="300px">
                    <v-card-title v-text="product.title"></v-card-title>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn icon>
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>

                        <v-btn icon>
                            <v-icon>mdi-bookmark</v-icon>
                        </v-btn>

                        <v-btn icon>
                            <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12>
                <v-card>
                    <v-card-title primary-title>
                        내용
                    </v-card-title>
                    <v-card-text v-html="product.content">
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12>
                <v-card>
                    <v-card-text>
                        <v-text-field
                            dense
                            label="댓글 남기기"
                            v-model="commentContent"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn class="mr-4" @click="sendComment()">댓글작성</v-btn>
                    </v-card-actions>
                    <v-list three-line v-if="comments">
                        <template v-for="comment in comments">
                            <v-list-item>
                                <v-list-item-avatar>
                                    <v-img :src="comment.author.img"></v-img>
                                </v-list-item-avatar>
                                <v-list-item-subtitle>{{ comment.author.nickname }}</v-list-item-subtitle>

                                <v-list-item-content>
                                    <v-list-item-subtitle v-html="comment.content"></v-list-item-subtitle>
                                </v-list-item-content>
                                </v-list-item>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<!--
<template>
    <div class="product" v-if="product">
        <div class="images">
        </div>
        <div class="detail">
            <h3>판매자 정보</h3>
            <p>닉네임: {{ product.author.nickname }}</p>
            <p>이메일: {{ product.author.email }}</p>
        </div>
        <div class="introduction">
            <p v-html="product.content"></p>
        </div>
        <div class="comments">
            <h3>댓글 목록</h3>
            <div class="comment" v-for="comment in comments">
            </div>
        </div>
    </div>
</template>
-->
<script>
//import ProductComments from '../components/ProductComments.vue'

export default {
    layouts: 'default',
    data() {
        return {
            commentContent: null,
        }
    },
    components: {
  //      ProductComments,
    },
    methods: {
        /**
         * Author : Youngjin Kwak
         * Purpose: initialize data
         * Return : none
         * StartedAt: 2019/12/24
         * UpdatedAt: 2019/12/25
         */
        load() {
            this.$store.dispatch('product/getProduct', {
                id: this.$route.params.id,
            })
            .then(() => {
            }).catch((err) => {
                console.error(err);
                alert(err);
            });
        },
        sendComment() {
            this.$store.dispatch('product/addComment', {
                commentContent: this.commentContent,
            })
            .then(() => {
            }).catch((err) => {
                console.error(err);
                alert(err);
            });
        },
        /**********************TEST용 삭제해주세요*********************************************8 */
        getImage () {
            const min = 550
            const max = 560

            return Math.floor(Math.random() * (max - min + 1)) + min
        },
    },
    computed: {
        me() {
            return this.$store.state.user.user;
        },
        product() {
            return this.$store.state.product.product;
        },
        comments() {
            return this.$store.state.product.comments;
        },
    },
    mounted() {
        this.load();
    },
}
</script>