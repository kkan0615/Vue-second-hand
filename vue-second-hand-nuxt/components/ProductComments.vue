<!--
    Author: Youngjin Kwak
    Start: 01/14/2020
    Update: 01/15/2020
    Purpose: Product list vue
 -->
<template>
    <v-card>
        <v-card-text >
            <v-text-field
                width="100%"
                label="댓글 남기기"
                v-model="commentContent"
                @click="focusComment()"
            ></v-text-field>
        </v-card-text>
        <v-card-actions v-if="isFoucs">
            <v-spacer></v-spacer>
            <v-btn class="mr-4 float-right" @click="unFocusComment()">취소</v-btn>
            <v-btn class="mr-4 float-right" @click="sendComment()">댓글작성</v-btn>
        </v-card-actions>
        <v-list two-line v-if="comments">
            <template v-for="(comment, index) in comments">
                <v-list-tile
                avatar >
                    <v-avatar>
                        <v-img :src="`http://localhost:8001/profileImage/${comment.author.img}`"/>
                    </v-avatar>

                    <v-list-tile-content>
                        <v-list-tile-title>{{ comment.author.nickname }}</v-list-tile-title >

                        <v-list-tile-sub-title v-html="comment.content"></v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            commentContent: null, // Comment Content
            isFoucs: false,
        }
    },
    methods: {
        sendComment() {
            if(!this.me) {
                alert('로그인이 필요합니다');
                return;
            }
            this.$store.dispatch('product/addComment', {
                commentContent: this.commentContent,
                id: this.$route.params.id,
            })
            .then(() => {
            }).catch((err) => {
                console.error(err);
                alert(err);
            });
        },

        focusComment() {
            this.isFoucs = true;
        },
        unFocusComment() {
            this.isFoucs = false;
        }
    },
    computed: {
        me() {
            return this.$store.state.users.user;
        },
        comments() {
            return this.$store.state.product.comments;
        },
    },
}
</script>