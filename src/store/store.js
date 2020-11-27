import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: [],
        mounths: [
            'Январь‎',
            'Февраль‎',
            'Март‎',
            'Апрель‎',
            'Май‎',
            'Июнь‎',
            'Июль‎',
            'Август‎',
            'Сентябрь‎',
            'Октябрь‎',
            'Ноябрь‎',
            'Декабрь‎'
        ]
    },
    getters: {
        getTasks(state) {
            return state.tasks;
        }
    },
    actions: {
        addTask({ commit }, task) {
            commit('addTask', task);
        },
        findTasks({ commit }, value) {
            commit('findTasks', value);
        }
    },
    mutations: {
        addTask(state, task) {
            state.tasks.push(task);

            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        }
    }
});