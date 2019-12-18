export const state = () => ({
    products: null,
    /*
    products: [
        {
            id: 0,
            title: 'one',
        },
        {
            id: 1,
            title: 'two',
        },
        {
            id: 2,
            title: 'three',
        }
    ]
    */
});

export const mutations = {
    /***************************************************
     * Author: Youngin Kwak
     * startedAt: 12/17/2019
     * UpdateAt: 12/17/2019
     * Parameter : state - state in state
     *              payload - res value
     * Purpose: Set user
    ***************************************************/
    setProducts(state, payload) {
        state.products = payload;
    },
}

export const actions = {
    getProducts({ commit, state }, payload) {
        return this.$axios.post('http://127.0.0.1:8001/products/list', {
            /* If there is data to send, write in here */
        }, {
            withCredentials: true,
        }).then((res) => {
            console.log(res.data);
            commit('setProducts', res.data.products);
            return res;
        }).catch((err) => {
            console.error(err);
            throw err.message;
        });;
    },
    getByHashTag({ commit, state }, payload) {
        return this.$axios.post('http://127.0.0.1:8001/hashtags/hashTag/' + payload.name, {
            /* If there is data to send, write in here */
        }, {
            withCredentials: true,
        }).then((res) => {
            console.log(res.data);
            commit('setProducts', res.data);
            return { id: res.data.id };
        }).catch((err) => {
            console.error(err);
            throw err.message;
        });;
    }
}
