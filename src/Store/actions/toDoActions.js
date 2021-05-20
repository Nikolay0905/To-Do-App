import * as actionNames from "./actionNames";

export const addTodo = (todo) => {
	return {
		type: actionNames.ADD_TODO,
		value: todo,
	};
};
