import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Welcome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth-ui"); // Remove user data from localStorage
    navigate("/login"); // Redirect to the login page
  };

  return (
    <Welcomestyle>
      <div>
        <h1>Welcome</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </Welcomestyle>
  );
};

const Welcomestyle = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #131324;
  color: white;
  text-align: center;

  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    margin-top: 20px;

    &:hover {
      background-color: #3d12b3;
    }
  }
`;

export default Welcome;
