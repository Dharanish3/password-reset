import React from "react";
import AxiosService from "../Utils/AxiosService";
import ApiRoutes from "../Utils/ApiRoutes";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      let res = await AxiosService.post(`${ApiRoutes.SIGN_UP.path}`, formProps);
      if (res.status === 201) {
        toast.success(res.data.message);

        navigate("/");
      }
    } catch (error) {
      toast.error("Enter All Field");
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="text-center mt-4 name">SignIn</div>
        <form className="p-3 mt-3" onSubmit={handleSubmit}>
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input type="text" name="email" placeholder="Email" required />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input type="text" name="role" placeholder="Your Role" required />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input type="number" name="phone" placeholder="Mobile Number" required />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <button className="btn mt-3" type="submit">
            Sign Up
          </button>
        </form>
        <div className="text-center fs-6">
          <Link to="/">Login</Link>
        </div>
      </div>
    </>
  );
}

export default SignIn;
