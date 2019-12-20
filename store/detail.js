const state = () => {
    return {
        post: {},
        lastest: [],
        categories: [],
        parent: [],
        tags: []
    }
}
const mutations = {
    setPost(state, payload) {
        state.post = payload
    },
    setLastest(state, payload) {
        state.lastest = payload
    },
    setCategories(state, payload) {
        state.categories = payload
    },
    setParent(state, payload) {
        state.parent = payload
    },
    setTags(state, payload) {
        state.tags = payload
    }
}
const actions = {
    async getAttributePost({ commit, dispatch, state }, slug) {
        await this.dispatch('home/layout')
        let res = await this.$axios.get("/article/detail/" + slug)
        commit("setPost", res.data.post)
        commit("setLastest", res.data.lastest)
        commit("setCategories", res.data.categories)
        commit("setParent", res.data.category_parent)
        commit("setTags", res.data.tags)
    },
    FB_Parse() {
        // setTimeout(function() {
        //     window.FB.XFBML.parse()
        // }, 0)
    }
}
const getters = {
    getPost: state => state.post,
    getLastest: state => state.lastest,
    getCategories: state => state.categories,
    getParent: state => state.parent,
    getTags: state => state.tags
}
export default {
    state,
    mutations,
    actions,
    getters
}