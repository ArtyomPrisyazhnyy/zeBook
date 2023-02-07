import jwt_decode from 'jwt-decode'

let initialState = {
    user: jwt_decode(localStorage.getItem('token')),
    isAdmin: !!localStorage.getItem('isAdmin'),
    isAuth: !!localStorage.getItem('token')
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.user }

        case 'SET_IS_ADMIN':
            return { ...state, isAdmin: action.bool }

        case 'SET_IS_AUTH':
            return { ...state, isAuth: action.bool }

        default:
            return state;
    }
}

export const setUserAc = (user) => ({ type: "SET_USER", user });
export const setIsAdminAC = (bool) => ({ type: 'SET_IS_ADMIN', bool });
export const setIsAuthAC = (bool) => ({ type: 'SET_IS_AUTH', bool });



export default usersReducer;