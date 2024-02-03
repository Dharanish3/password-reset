import React, { useState, useEffect } from "react";
import AxiosService from "../Utils/AxiosService";
import ApiRoutes from "../Utils/ApiRoutes";
import useLogout from "../Hooks/Logout";
import { toast } from "react-toastify";
import Topbar from "./TopBar";
import Table from "react-bootstrap/Table";

function Dashboard() {
  const [user, setUser] = useState([]);
  let logout = useLogout();

  const getData = async () => {
    try {
      const res = await AxiosService.get(`${ApiRoutes.GET_USER.path}`);
      if (res.status === 200) {
        
        setUser(res.data.user);
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message);
      if (error.response.status === 402) logout();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Topbar />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {user.map((e, i) => (
            <tr key={e._id}>
              <td>{i + 1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.role}</td>
              <td>{e.status ? "Active" : "Inactive"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Dashboard;
