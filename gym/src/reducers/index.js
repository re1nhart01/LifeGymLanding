import { combineReducers } from 'redux';


const INITIALIZE_STATE = [
    {login: "Andrew", text: "Best Gym ever", rating: 5},
    {login: "Eugene", text: "Low prices, best atmosphere" ,rating: 5},
    {login: "Darina", text: "Amazing training" ,rating: 5}
]


const Initialise_state = {
    login: "",
    text: "",
    rating: 1
}

const reviewReducer = (state = INITIALIZE_STATE, action) => {
    if (action.type === "PUSH_DATA") {
        return [...state, {login: action.payload.login, text: action.payload.text, rating: action.payload.rating}]
    }
    return state;
}

const reviewOneReducer = (state = Initialise_state, action) => {
    if (action.type === "PUSH_ONE_DATA") {
        return {...state, login: action.payload.login, text: action.payload.text, rating: action.payload.rating}
    }
    return state;
}

export default combineReducers({
    reviewReducer: reviewReducer,
    reviewOneReducer: reviewOneReducer
});



