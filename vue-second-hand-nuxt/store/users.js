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
    imagePath: null,
    detail: null,
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
    },

    setImagePath(state, payload) {
        state.imagePath = payload;
    },

    /***************************************************
     * Author: Youngin Kwak
     * startedAt: 01/24/2020
     * UpdateAt: 01/24/2020
     * Parameter : state - state in state
     *              payload - res value
     * Purpose: Set detail in user
    ***************************************************/
    setDetail(state, payload) {
        state.detail = payload;
    },
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
            image: state.imagePath,
        }, {
            withCredentials: true,
        }).then((res) => {
            console.log(res); /** plz remove it after dev */
            alert('환영합니다 회원가입에 성공했습니다.');
            return res;
        }).catch((error) => {
            console.error(error);
            throw error.message;
        });
    },
    uploadImage({ commit, state }, payload) {
        this.$axios.post('http://127.0.0.1:8001/auth/uploadImage', payload, {
            withCredentials: true,
        }).then((res) => {
            console.log(res); /** plz remove it after dev */
            commit('setImagePath', res.data);
            return res;
        }).catch((error) => {
            console.error(error);
            alert('image is unsuccess to send');
        });
    },
    logIn({commit, state}, payload) {
        //let formData = new FormData();
        //formData.append('username', payload.username);
        //formData.append('password', payload.password);

        //return this.$axios.post('http://127.0.0.1:8001/auth/login', formData, {
        return this.$axios.post('http://127.0.0.1:8001/auth/login', {
            username: payload.username,
            password: payload.password,
        }, {
            withCredentials: true,
        }).then((res) => {
            console.log(res.data);
            //alert(res);
            commit('setUser', res.data);
            return res.data;
        }).catch((error) => {
            console.error(error);
            throw error.response.status;
        });
    },
    logOut({ commit }) {
        this.$axios.post('http://127.0.0.1:8001/auth/logout', {}, {
            withCredentials: true,
        })
        .then((data) => {
            console.log(data);
            commit('setUser', null);
            commit('setDetail', null);
        })
        .catch((err) => {
            console.error(err);
            alert("hi");
        });
    },
    /***************************************************
     * Author: Youngin Kwak
     * startedAt: 01/24/2019
     * UpdateAt: 01/24/2019
     * Parameter : commit -
     *             payload -
     * Purpose: get user detail form server
    ***************************************************/
    getDetail({ commit }, payload) {
        return this.$axios.post(`http://127.0.0.1:8001/profile/${ payload.id }`, {}, {
            withCredentials: true,
        })
        .then((res) => {
            console.log(res);
            commit('setDetail', res.data.detail);
            return res.data;
        })
        .catch((err) => {
            console.error(err);
            throw error.response.status;
        });
    },
}