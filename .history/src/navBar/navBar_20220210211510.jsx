import styled from "styled-components";
import React from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <HeaderFrame>
      <NavLink to="/products/list"> List of Products</NavLink>

      <NavLink to="/home"> Home</NavLink>
    </HeaderFrame>
  );
};
const HeaderFrame = styled.div`
  min-height: 10px;
  min-width: 100%;
  column-gap: 40px;
  background-color: gray;
  display: flex;
  flex-direction: row;
  & > ul {
    list-style: none;
    display: flex;
    & > li:not(:nth-child(1)) {
      margin-left: 10px;
    }
  }
`;
export default NavBar;
