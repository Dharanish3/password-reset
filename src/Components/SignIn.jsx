import React from "react";
import AxiosService from "../Utils/AxiosService";
import ApiRoutes from "../Utils/ApiRoutes";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    try {
      e.preventDefault(); 

      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      let res = await AxiosService.post(`${ApiRoutes.SIGN_IN.path}`,formProps)
      if(res.status === 200){
        toast.success(res.data.message)

        sessionStorage.setItem('token',res.data.token)
        sessionStorage.setItem('role',res.data.role)

        if(res.data.role=== 'Admin'){
          navigate ('/admin')
        }else if (res.data.role === 'User'){
            navigate('/user')
        }
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message);
    }

  };

  return (
    <>
      <div className="wrapper">
        <div className="text-center mt-4 name">Login</div>
        <form className="p-3 mt-3" onSubmit={handleSubmit}>
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input type="text" name="email" id="userName" placeholder="Email" required />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password" required
            />
          </div>
          <button className="btn mt-3" type="submit">
            Login
          </button>
        </form>
        <div className="text-center fs-6">
          <Link to="/forgot">Forget password?</Link> or <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </>
  );
}

export default SignIn;
