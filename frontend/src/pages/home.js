import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [connectedUser, setConnectedUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getConnectedUserData = () => {
      const userData = localStorage.getItem("user_data");
      if (userData === null) {
        navigate("/login");
      } else {
        setConnectedUser(JSON.parse(userData));
      }
    };
    
    getConnectedUserData();
  }, [navigate]);

  return (
    <>
      <h1>Hello {connectedUser.firstname || "Guest"}</h1>
    </>
  );
};

export default Home;
