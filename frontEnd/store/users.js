/***************************************************
 * Author: Youngin Kwak
 * startedAt: 11/01/2019
 * UpdateAt: 11/15/2019
 * Purpose: User store
 * **************************************************/

 /***************************************************
 * Author: Youngin Kwak
 * startedAt: 11/01/2019
 * UpdateAt: 11/15/2019
 * Purpose: User state
 * **************************************************/
export const state = () => ({
    user: null, /** user */
});

/***************************************************
 * Author: Youngin Kwak
 * startedAt: 11/01/2019
 * UpdateAt: 11/15/2019
 * Purpose: User mutation
 * **************************************************/
export const mutations = {
    /***************************************************
     * Author: Youngin Kwak
     * startedAt: 11/01/2019
     * UpdateAt: 11/15/2019
     * Parameter : state - state in state
     *              payload - res value
     * Purpose: Set user
    ***************************************************/
    setUser(state, payload) {
        state.user = payload;
    },

    /***************************************************
     * Author: Youngin Kwak
     * startedAt: 11/01/2019
     * UpdateAt: 11/15/2019
     * Parameter : state - state in state
     * Purpose: get User Nickname
    ***************************************************/
    getNickName(state) {
        return state.user.nickname;
    }
}

/***************************************************
 * Author: Youngin Kwak
 * startedAt: 11/01/2019
 * UpdateAt: 11/15/2019
 * Purpose: User actions
 * **************************************************/
export const actions = {
    /***************************************************
     * Author: Youngin Kwak
     * startedAt: 11/01/2019
     * UpdateAt: 11/15/2019
     * Parameter : commit -
     *             state -
     *             payload -
     * Purpose: Send data to sever for creating user
    ***************************************************/
    signUp({ commit, state }, payload) {
        return this.$axios.post('http://127.0.0.1:8001/auth/join', {
            username: payload.username, /** Username */
            email: payload.email, /** email */
            nickname: payload.nickname, /** nickname */
            password: payload.password, /** password */
        }, {
            withCredentials: true,
        }).then((res) => {
            console.log(res); /** plz remove it after dev */
            alert(res);
            return res;
        }).catch((error) => {
            console.error(error);
            throw error.message;
        });
    },
    logIn({commit, state}, payload) {
        let formData = new FormData();
        formData.append('username', payload.username);
        formData.append('password', payload.password);

        return this.$axios.post('http://127.0.0.1:8001/login', formData, {
            withCredentials: true,
        }).then((res) => {
            console.log(res.data);
            alert(res);
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
            console.log(data);

            commit('setUser', null);
        })
        .catch((err) => {
            console.error(err);
            alert("hi");
        });
    }
}