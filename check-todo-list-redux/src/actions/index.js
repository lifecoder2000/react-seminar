import * as types from './ActionTypes';

export const handleCheck = () => ({
    type : types.HANDLE_CHECK
});

export const handleTodos = (todo) => ({
    type : types.HANDLE_TODOS,
    todo
});