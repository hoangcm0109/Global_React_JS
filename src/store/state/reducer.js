import { SET_TODO_INPUT, ADD_TODO } from './const'

const initState = {
    todos: [],
    todoInput: '',
}

const reducer = (state, action) => {
    const { type, payload } = action
    
    switch (type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        default:
            throw new Error('Unknown action')
    }
}

export { initState }
export default reducer