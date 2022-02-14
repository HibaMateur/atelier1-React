import { Component, useEffect } from "react";
import styled from "styled-components";
import React, { useState } from "react";

function ProductList(props) {
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState("red");
  const buttonClick = () => {
    setLikes(likes + 1);
  };
  const changeColor = () => {
    setColor("red");
  };

  return (
    <ProductFrame>
      <ProductImageWrapper
        style={{ background: color }}
        onClick={() => {
          if (likes > 5) {
            setColor("red");
          }
        }}
      >
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
const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 150px;
  min-width: 150px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
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
