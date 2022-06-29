import { createStore } from 'vuex'
import { Toast } from 'vant'
import vueP from 'vuex-persistedstate'
export default createStore({
    plugins: [vueP()],
    state: {
        name: '',
        color: '',
        booklist: []
    },
    getters: {},
    mutations: {
        login(state, name) {
            state.name = name
        },
        changecolor(state, color) {
            state.color = color
        },
        add(state, obj) {
            state.booklist.push(obj)
        },
        swh(state, i) {
            state.booklist[i].flag = !state.booklist[i].flag
        },
        del(state, i) {
            state.booklist.splice(i, 1)
        }

    },
    actions: {},
    modules: {}
})