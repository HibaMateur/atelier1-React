import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
class NavBar extends React.Component {
  state = {
    current: "mail",
  };

  render() {
    const { current } = this.state;
    return (
      <HeaderFrame
        onClick={this.handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <HeaderFrame.Item key="mail">
          List Products
          <Link to="/products/list" />
        </HeaderFrame.Item>
      </HeaderFrame>
    );
  }
}
const HeaderFrame = styled.div`
  min-height: 50px;
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
