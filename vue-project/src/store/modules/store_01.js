export default {
    state: {
        show: false,
        number: 1,
        todos: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false }
          ]
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
    },
    mutations: {
        mutation_01: state => {
            state.number += 10;
        },
        mutation_02: state => {
            state.number += 15;
        }
    },
    actions: {
        action_01: ({commit}) => {
            commit('mutation_02');
        }
    }
}