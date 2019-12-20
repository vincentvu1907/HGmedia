import axios from "~/libs/axios"
const state = () => {
    return {
        config: null,
        navs: [],
        events: [],
        houses: [],
        decorations: [],
        gardens: [],
        recipes: [],
        life_styles: [],
        sticky: [],
    }
}
const mutations = {
    setConfig(state, payload) {
        state.config = payload
    },
    setNavs(state, payload) {
        state.navs = payload
    },
    setEvents(state, payload) {
        state.events = payload
    },
    setHouse(state, payload) {
        state.houses = payload
    },
    setDecarations(state, payload) {
        state.decorations = payload
    },
    setGardens(state, payload) {
        state.gardens = payload
    },
    setRecipes(state, payload) {
        state.recipes = payload
    },
    setLifeStyles(state, payload) {
        state.life_styles = payload
    },
    setSticky(state, payload) {
        state.sticky = payload
    }
}
const actions = {
    async getAttributeHomepage({ commit, state, dispatch }) {
        // let navs = await axios.get("/category/nav")
        // commit("setNavs", navs.data.data)
        await dispatch("layout")
        let config = await axios.get('/config')
        commit('setConfig', config.data.data)
        let events = await axios.get('/event')
        commit("setEvents", events.data)
            // Post All
        let houses = await axios.get("/article/category/1")
        commit("setHouse", houses.data)
        let decorations = await axios.get("/article/category/2")
        commit("setDecarations", decorations.data)
        let gardens = await axios.get("/article/category/3")
        commit("setGardens", gardens.data)
        let recipes = await axios.get("/article/category/4")
        commit("setRecipes", recipes.data)
        let lifes = await axios.get("/article/category/5")
        commit("setLifeStyles", lifes.data)
        let sticky = await axios.get('/article/sticky')
        commit("setSticky", sticky.data)
    },
    async layout({ commit, state }) {
        let navs = await axios.get("/category/nav")
        commit("setNavs", navs.data.data)
    }
}
const getters = {
    getConfig: state => state.config,
    getNavs: state => state.navs,
    getEvents: state => state.events,
    getEventsPostFinal: state => state.events.posts[state.events.posts.length - 1],
    getHouses: state => state.houses,
    getDecorations: state => state.decorations,
    getGardens: state => state.gardens,
    getRecipes: state => state.recipes,
    getLifeStyles: state => state.life_styles,
    getSticky: state => state.sticky
}
export default { state, mutations, actions, getters }