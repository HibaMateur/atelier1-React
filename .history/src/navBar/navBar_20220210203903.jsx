import styled from "styled-components";
import React from "react";
import { Link, NavLink } from "react-router-dom";
class NavBar extends React.Component {
  render() {
    return <HeaderFrame></HeaderFrame>;
  }
}
const HeaderFrame = styled.div`
  min-height: 10px;
  min-width: 100%;
  background-color: blue;
  display: flex;
  flex-direction: column;
  & > ul {
    list-style: none;
    display: flex;
    & > li:not(:nth-child(1)) {
      margin-left: 10px;
    }
  }
`;
export default NavBar;
