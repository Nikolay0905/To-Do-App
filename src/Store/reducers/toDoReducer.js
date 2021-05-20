import * as actionNames from "../actions/actionNames";

const initialState = {
	todo: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionNames.ADD_TODO:
			return {
				...state,
				todo: state.todo.concat({
					text: action.value.text,
					isCompleted: action.value.isCompleted,
				}),
			};
		default:
			return state;
	}
};

export default reducer;
