import { Component } from "react";
import styled from "styled-components";
import React, { useState } from "react";

function ProductList(props) {
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState("red");

  const buttonClick = () => {
    setLikes(likes + 1);
  };
  const changeColor = () => {
    if (likes > 5) {
      setColor("red");
    }
  };

  const ProductFrame = styled.div`
    border-radius: 25px;
    min-height: 150px;
    min-width: 150px;

    margin: 10px;
    display: flex;
    flex-direction: column;
  `;
  return (
    <ProductFrame style={changeColor}>
      <ProductImageWrapper>
        <ProductImage src={props.img}></ProductImage>
      </ProductImageWrapper>
      <ProductInfoWrapper>{props.name}</ProductInfoWrapper>
      <ProductInfoWrapper>{props.price}</ProductInfoWrapper>
      <p>likes :{likes}</p>

      <ProductInfoWrapper>
        <button onClick={buttonClick}>Like</button>
      </ProductInfoWrapper>
    </ProductFrame>
  );
}

const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 150px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center`;

const AppFrame = styled.div`
  text-align: center;
  display: flex;
`;
export default ProductList;
