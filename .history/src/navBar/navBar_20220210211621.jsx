import styled from "styled-components";
import React from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <HeaderFrame>
      <a routerLink="/products/list"> List of Products</a>

      <a routerLink="/home"> Home</a>
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
