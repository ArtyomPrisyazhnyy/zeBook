import jwt_decode from 'jwt-decode'

let initialState = {
    user: localStorage.getItem('token') ? jwt_decode(localStorage.getItem('token')) : null,
    isAdmin: !!localStorage.getItem('isAdmin'),
    isAuth: !!localStorage.getItem('token')
};


const users = (state = initialState, action) => {

    switch (action.type) {
        case "SET_USER":
            return { ...state, user: action.user }

        case "SET_IS_ADMIN":
            return { ...state, isAdmin: action.bool }

        case "SET_IS_AUTH":
            return { ...state, isAuth: action.bool }

        default:
            return state;
    }
}

export default users;