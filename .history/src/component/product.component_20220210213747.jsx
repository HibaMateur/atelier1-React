import { Component, useEffect } from "react";
import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Product(props) {
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState("");
  const buttonClick = () => {
    setLikes(likes + 1);
    if (likes >= 4) {
      setColor("red");
    }
  };

  return (
    <ProductFrame style={{ background: color }}>
      <ProductImageWrapper>
        <ProductImage src={props.img}>aaa</ProductImage>
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
  width: 180px;
  border-radius: 25px;

  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
  flexwrap: "wrap";
`;
const ProductImageWrapper = styled.div`
  margin: 15px;
  max-width: 100%;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 25px;
`;
const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center`;

export default Product;
