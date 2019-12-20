import axios from "~/libs/axios"
const state = () => {
    return {
        categories: [],
        posts: [],
        loading: false
    }
}
const mutations = {
    setCategories(state, payload) {
        state.categories = payload
    },
    setPosts(state, payload) {
        state.posts = payload
    },
    setLoading(state, payload) {
        state.loading = payload
    }
}
const actions = {
    async getSearchSuface({ commit, state }, txt) {
        commit("setLoading", true);
        let res = await axios.get('/scout/' + txt)
        commit("setCategories", res.data.categories)
        commit("setPosts", res.data.posts)
        commit("setLoading", false);
    },
    async getAll({ commit, dispatch }, txt) {
        await this.dispatch("home/layout")
        await this.dispatch("search_surface/getSearchSuface", txt)
    }
}
const getters = {
    getCategories: state => state.categories,
    getPosts: state => state.posts,
    getLoading: state => state.loading
}
export default {
    state,
    actions,
    mutations,
    getters
}