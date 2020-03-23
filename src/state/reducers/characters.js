import * as types from '../types';

const initialState = {
	characterList: JSON.parse(localStorage.getItem('characters')) || [],
	characterData: [],
	isFetching: false,
	error: ''
};

const characterReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.GET_CHARACTERS_DATA:
			return {
				...state,
				isFetching: true
			};
		case types.GET_CHARACTERS_SUCCESS:
			return {
				...state,
				characterList: action.payload
			};
		case types.GET_CHARACTERS_DATA_SUCCESS:
			return {
				...state,
				isFetching: false,
				characterData: [...state.characterData, action.payload]
			};
		case types.ADD_CHARACTER_SUCCESS:
			return {
				...state,
				characterList: action.payload
			};
		case types.GET_CHARACTERS_DATA_FAILURE:
			return {
				...state,
				isFetching: false
			};
		default:
			return state;
	}
};

export default characterReducer;
