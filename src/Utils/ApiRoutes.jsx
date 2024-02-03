

const ApiRoutes = {
    SIGN_IN : {
        path : '/login',
        authenticate : false
    },
    SIGN_UP : {
        path : '/create',
        authenticate : false
    },
    GET_USER : {
        path : '/user',
        authenticate : false
    },
    FORGOT : {
        path : '/forgot-password',
        authenticate : false
    }
}

export default ApiRoutes