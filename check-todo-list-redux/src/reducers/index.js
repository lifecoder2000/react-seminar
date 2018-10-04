import * as types from '../actions/ActionTypes';

// 초기 상태를 정의합니다
const initialState = {
    check : false,
    todos : []
};

function checkTodos(state = initialState, action) {
    switch (action.type) {
        case types.HANDLE_CHECK:
            return {
                ...state,
                check: !state.check
            };
        case types.HANDLE_TODOS:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            };
        default:
            return state;
    }
};

export default checkTodos;

