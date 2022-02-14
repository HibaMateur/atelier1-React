import styled from "styled-components";
import React from "react";
class NavBar extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e: any) => {
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
        <HeaderFrame.Item key="mail" icon={<PlusSquareOutlined />}>
          Add Anime
          <Link to="/anime/add" />
        </HeaderFrame.Item>

        <HeaderFrame.Item key="alipay" icon={<UnorderedListOutlined />}>
          List Animes <Link to="/anime" />
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
