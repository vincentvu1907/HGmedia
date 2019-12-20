const state = () => {
    return {
        parent: {},
        posts: [],
        child: [],
        activeChild: {},
        page: 1,
        loading: false,
        loadingBtn: false,
        statusBtnMore: true,
        head: {
            title: "",
            description: "",
        }
    }
}
const mutations = {
    setParent(state, payload) {
        state.parent = payload
    },
    setPosts(state, payload) {
        state.posts = payload
    },
    setChild(state, payload) {
        state.child = payload
    },
    setDefaultPage(state) {
        state.page = 1;
    },
    IncrementPage(state) {
        state.page++
    },
    setActiveChild(state, payload) {
        state.activeChild = payload
    },
    setLoading(state, payload) {
        state.loading = payload
    },
    setHead(state, payload) {
        state.head = payload
    },
    setStatusBtnMore(state, payload) {
        state.statusBtnMore = payload
    },
    setLoadingBtn(state, payload) {
        state.loadingBtn = payload
    }

}
const actions = {
    async getAttributeCategory({ commit, state, dispatch }, slug) {
        commit("setLoading", true)
        commit('setStatusBtnMore', true)
        commit("setDefaultPage")
        await this.dispatch("home/layout")
        let res = await this.$axios.get(`/article/category-all/${slug}/${state.page}`)
        commit("setParent", res.data.category)
        commit("setPosts", res.data.posts)
        commit("setChild", res.data.child)
        commit("setActiveChild", {})

        commit("setLoading", false)
    },
    async getChild({ commit, state, dispatch }, slug) {
        commit("setLoading", true)
        commit('setStatusBtnMore', true)
        commit("setDefaultPage")
        await this.dispatch("home/layout")
        let res = await this.$axios.get(`/article/category-child/${slug}/${state.page}`)
        commit("setParent", res.data.category_parent)
        commit("setPosts", res.data.posts)
        commit("setChild", res.data.child)
        commit('setActiveChild', res.data.category)
        commit("setLoading", false)
    },
    async updateChild({ commit, dispatch, state, route }, routes) {
        commit('IncrementPage')
        commit('setLoadingBtn', true)
        let uri = ''
        let slug = ''
        if (routes.query.child != undefined) {
            uri = 'category-child'
            slug = routes.query.child
        } else {
            uri = 'category-all'
            slug = routes.params.slug
        }
        let res = await this.$axios.get(`/article/${uri}/${slug}/${state.page}`)
        if (res.data.posts.length == state.posts.length) {
            commit('setStatusBtnMore', false)
        }
        commit("setPosts", res.data.posts)
        commit('setLoadingBtn', false)
    }
}
const getters = {
    getParent: state => state.parent,
    getPosts: state => state.posts,
    getChild: state => state.child,
    getActiveChild: state => state.activeChild,
    getLoading: state => state.loading,
    getHead: state => state.head,
    getStatusBtnMore: state => state.statusBtnMore,
    getLoadingBtn: state => state.loadingBtn
}
export default {
    state,
    actions,
    mutations,
    getters
}