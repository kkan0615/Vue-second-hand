export const state = () => ({
    user: null,
});

export const mutations = {
    setUser(state, payload) {
        state.user = payload;
    },
    getNickName(state) {
        return state.user.nickname;
    }
}

export const actions = {
    signUp({ commit, state }, payload) {
        this.$axios.post('http://127.0.0.1:8001/auth/signUp', {
            username: payload.username,
            email: payload.email,
            nickname: payload.nickname,
            password: payload.password,
        }, {
            withCredentials: true,
        }).then((res) => {
            alert('Success to signUp');
        }).catch((error) => {
            console.error(error);
            throw error.message;
        });
    },
    logIn({commit, state}, payload) {
        return this.$axios.post('http://127.0.0.1:8001/auth/signUp', {
            useranme: payload.username,
            password: payload.password,
        }, {
            withCredentials: true,
        }).then((res) => {
            commit('setUser', res.data);
            return res.data;
        }).catch((error) => {
            console.error(error);
            throw error.message;
        });
    },
    logOut({ commit }) {
        this.$axios.post('http://127.0.0.1:8001/auth/logout', {}, {
            withCredentials: true,
        })
        .then((data) => {
            commit('setMe', null);
        })
        .catch((err) => {
            console.error(err);
        });
    }
}