import * as actionNames from "../actions/actionNames";

const initialState = {
	showAlert: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionNames.SHOW_AND_HIDE_ALERT:
			return {
				...state,
				showAlert: !state.showAlert,
			};
		default:
			return state;
	}
};

export default reducer;
