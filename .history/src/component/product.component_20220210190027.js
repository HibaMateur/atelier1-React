import { Component, useEffect } from "react";
import styled from "styled-components";
import React, { useState } from "react";

function ProductList(props) {
  const [likes, setLikes] = useState(0);
  const [count, setCount] = useState(0);
  const color = count % 5 === 0 ? "red" : "blue";

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  const buttonClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div
      onchange={(e) => {
        setCount(count + 1);
      }}
    >
      <ProductFrame>
        <ProductImageWrapperBest>
          <ProductImageWrapper>
            <ProductImage src={props.img}></ProductImage>
          </ProductImageWrapper>
        </ProductImageWrapperBest>
        <ProductInfoWrapper>{props.name}</ProductInfoWrapper>
        <ProductInfoWrapper>{props.price}</ProductInfoWrapper>
        <p>likes :{likes}</p>

        <ProductInfoWrapper>
          <Button>
            <button onClick={buttonClick}>Like</button>
          </Button>
        </ProductInfoWrapper>
      </ProductFrame>
    </div>
  );
}

const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
`;
const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 200px;
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
    text-align: center;
  }
`;
const ProductFrameBest = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: #db7093;
  margin: 10px;
  display: flex;
  flex-direction: column;
  animation: clignote 2s linear infinite;
  @keyframes clignote {
    50% {
      opacity: 0.5;
    }
  }
`;
const ProductImageWrapperBest = styled.div`
  margin: 5px;
  max-width: 200px;
`;
const ProductImageBest = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapperBest = styled.div`
  color: white;
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center;
  }
`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
export default ProductList;
