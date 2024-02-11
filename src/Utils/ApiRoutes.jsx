const ApiRoutes = {
    SIGN_IN : {
        path : '/login',
        authenticate : false
    },
    URL_SHOW : {
        path : '/shortUrl',
        authenticate : false
       
    },
    URL_CREATE: {
        path : '/shortUrl',
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