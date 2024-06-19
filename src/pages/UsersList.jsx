import axios from "axios";
import UsersListComponents from "../components/UsersListComponents";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UsersList = () => {
  const navigate = useNavigate();
  const GetMe = async () => {
    try {
      const xid = sessionStorage.getItem("id");
      if (!xid) {
        navigate("/");
      }
      const response = await axios.get("https://be-node.vercel.app/me/" + xid);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else if (error.request) {
        console.log("No response from server");
      } else {
        console.log("An error occurred during login");
      }
    }
  };

  useEffect(() => {
    GetMe();
  }, []);

  return (
    <Layout>
      <UsersListComponents />
    </Layout>
  );
};

export default UsersList;
