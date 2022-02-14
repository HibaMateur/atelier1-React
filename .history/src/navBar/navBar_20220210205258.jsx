import styled from "styled-components";
import React from "react";
import { Link, NavLink } from "react-router-dom";
class NavBar extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    return (
      <HeaderFrame
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <NavLink to="/products/list" activeStyle>
          {" "}
          List of Products
        </NavLink>

        <NavLink to="/home" activeStyle>
          {" "}
          Home
        </NavLink>
      </HeaderFrame>
    );
  }
}
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
