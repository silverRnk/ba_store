import React, { useState } from 'react'
import styled from 'styled-components'
import ProductImg from "../../assets/Product_Img.png"

const Card = styled.div`
    height: 350px;
    width: 275px;
    position: relative;
    background-color: white;
`

const ImageArea = styled.div`
`

const Image = styled.img`
  background-color: red;
`
const Details = styled.div`
  display: flex;
  flex-direction:column;
  margin: 10px 5px 10px 10px;
  
  `
const Title = styled.p``
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
const Price = styled.div``
const Rating = styled.div``

const Options = styled("div").withConfig({
  shouldForwardProp: (props) => {
    return props !== "isVisible";
  },
}) <{ isVisible: boolean }>`
  display: ${(props) => props.isVisible? "flex": "none"};
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: gray;
  height: 350px;
  width: 275px;
  z-index: 2;
  opacity: 20%;

  align-items: center;
  justify-content: center;
  gap: 10px;

`

const CircleButton = styled.button`
  all:unset;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: white;
  cursor: pointer;
  z-index: 3;

`

const OptionButton = () => {

  return(
    <CircleButton>I</CircleButton>
  )
}

const ItemCard = () => {
  const [mouseEnter, useMouseEnter] = useState(false);

  const handleMouseEnter = () => {
    useMouseEnter(true);
  }

  const handleMouseLeave = () => {
    useMouseEnter(false);
  }

  return (
    <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ImageArea>
          <Image width={"inherit"} height={"auto"} src={ProductImg} alt='product'/>
        </ImageArea>
        <Details>
          <Title>Mika Keychain</Title>
          <Bottom>
            <Price>$ 100.00</Price>
            <Rating>*****</Rating>
          </Bottom>
        </Details>
        <Options isVisible={mouseEnter}>
          <OptionButton/>
          <OptionButton/>
          <OptionButton/>
        </Options>
    </Card>
  )
}

export default ItemCard