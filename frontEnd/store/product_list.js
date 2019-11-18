export const state = () => ({
    products: null,
});

export const mutations = {
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
            commit('setProduct', res.data);
            return res;
        }).catch((err) => {
            console.error(err);
            throw err.message;
        });;
    }
}
