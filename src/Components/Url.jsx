import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import AxiosService from "../Utils/AxiosService";
import ApiRoutes from "../Utils/ApiRoutes";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import FormUrl from "./FormUrl";

function Url() {
  const [url, setUrl] = useState();

  const getData = async () => {
    try {
      const res = await AxiosService.get(`${ApiRoutes.URL_SHOW.path}`);

      if (res.status === 200) {
        setUrl(res.data.url);
        toast.success("Data fetched successfully");
      }
    } catch (error) {
      console.error("Error fetching data:", error); // Log the error for debugging
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
   
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Long Url</th>
            <th>Shorten</th>
            <th>Click Count</th>
          </tr>
        </thead>
        <tbody>
          { url && (
            url.map((e, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><Link to={e.full} target="blank">{e.full}</Link></td>
                <td><Link to={e.full} target="blank">{e.short}</Link></td>
                <td >{e.clicks}</td>
              </tr>
            ))
          )
       
          }
        </tbody>
      </Table>
    </>
  );
}

export default Url;
