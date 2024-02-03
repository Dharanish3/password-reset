import { Navigate } from "react-router-dom"
import Dashboard from "../Components/Dashboard"
import SignIn from "../Components/SignIn"
import SignUP from "../Components/SignUP"
import User from "../Components/User"
import Forgot from "../Components/Forgot"


const Approutes = [{
    
    path: "/user",
    element: <User/>,
    name : "Home"
},{
    
    path: "/forgot",
    element: <Forgot/>,
    name : "Forgot"
},
{
    path : "/admin",
    element : <Dashboard/>,
    name : "Dashboard"
},{
    path : "/",
    element: <SignIn/>,
    name : "login"
},{
    path : '/signup',
    element : <SignUP/>,
    name : "Signup"
},
{
    path : '/*',
    element: <Navigate to="/"/>
}]


export default Approutes