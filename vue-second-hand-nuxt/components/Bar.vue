<!--
    FileName: Bar.vue
    Author: Youngjin Kwak
    Start: 01/02/2020
    Update: 01/02/2020
    Purpose: Footer
 -->
<template>
    <v-app-bar
        dense
        absolute
        color="green accent-3"
        dark
        :collapse="!collapseOnScroll"
        :collapse-on-scroll="collapseOnScroll"
        scroll-target="#scrolling-techniques-6"
        app
    >
        <v-app-bar-nav-icon @click="emitDrawer()"></v-app-bar-nav-icon>
        <v-btn to="/" text="true">
            <v-toolbar-title>Share Market!</v-toolbar-title>
        </v-btn>
        <v-spacer></v-spacer>
        <v-text-field
            placeholder="Search..."
            single-line
            append-icon="search"
            :append-icon-cb="() => {}"
            color="white"
            hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon
        nuxt
        to="/products">
            <v-icon>fas fa-shopping-cart</v-icon>
        </v-btn>
        <v-menu
        v-if="!me"
        open-on-hover
        offset-x>
            <template v-slot:activator="{ on }">
                <v-btn
                v-on="on"
                icon>
                    <v-icon>fas fa-user</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item link>
                    <v-btn to="/login" text="true">
                        <v-list-item-title>
                            로그인
                        </v-list-item-title>
                    </v-btn>
                </v-list-item>
                <v-list-item link>
                    <v-btn to="/signUp" text="true">
                        <v-list-item-title>
                            회원가입
                        </v-list-item-title>
                    </v-btn>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-menu
        v-else
        open-on-hover
        offset-x>
            <template v-slot:activator="{ on }">
                <v-avatar
                v-on="on"
                size="36px">
                    <v-img :src="'http://localhost:8001/profileImage/' + me.user.img"></v-img>
                </v-avatar>
            </template>
            <v-list>
                <v-list-item link>
                    <v-btn to="/login" text="true">
                        <v-list-item-title>
                            프로필정보
                        </v-list-item-title>
                    </v-btn>
                </v-list-item>
                <v-list-item link>
                    <v-btn to="/signUp" text="true">
                        <v-list-item-title>
                            로그아웃
                        </v-list-item-title>
                    </v-btn>
                </v-list-item>
                <v-list-item link>
                    <v-btn to="/products/write" text="true">
                        <v-list-item-title>
                            글작성
                        </v-list-item-title>
                    </v-btn>
                </v-list-item>
            </v-list>
        </v-menu>

    </v-app-bar>
</template>

<script>
export default {
    props: {
        drawer: Boolean,
    },
    data: () => ({
        collapseOnScroll: true,
        barDrawer: true,
        list: [
            {
                title: '로그인',
                href: '/login',
            },
            {
                title: '회원가입',
                href: '/signUp',
            }
        ]
    }),
    computed: {
        me() {
            return this.$store.state.users.user;
        }
    },
    methods: {
        emitDrawer() {
            this.barDrawer = !this.barDrawer;
            this.$emit('changeDrawer', this.barDrawer);
        }
    },
    created() {
        this.barDrawer = this.drawer;
    },
}
</script>
<style lang="scss" scoped>
</style>