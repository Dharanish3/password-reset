import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import AxiosService from "../Utils/AxiosService";
import ApiRoutes from "../Utils/ApiRoutes";
import { useNavigate } from 'react-router-dom';

function FormUrl() {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);
      const formProps = Object.fromEntries(formData);
      const res = await AxiosService.post(
        `${ApiRoutes.URL_CREATE.path}`,
        formProps
      );

      if (res.status === 200) {
        
        toast.success("Data created successfully");
        navigate('/url')
        
      }
    } catch (error) {
      console.error("Error fetching data:", error); // Log the error for debugging
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <>
    <br />
      <form onSubmit={handleSubmit} style={{textAlign :"center"}}>
        <Form.Label htmlFor="url" >Url</Form.Label>
        <Form.Control
          type="text"
          id="text"
          className="mx-auto d-block"
          name="full"
        />
        <Button variant="success" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}

export default FormUrl;
