import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProductImg from "../../assets/Product_Img.png"

import ShoppingCartBorderIcon from '@mui/icons-material/ShoppingCartBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NewDeals } from '../../interface';

const Card = styled.div`
    height: auto;
    width: 275px;
    position: relative;
    background-color: white;
    display:flex;
    flex-direction:column;
`

const ImageArea = styled.div`
  flex:auto;

`

const Image = styled.img`
  width:275px;
  height:auto;
  background-color: red;
  object-fit:cover;
`
const Details = styled.div`
  display: flex;
  flex-direction:column;
  margin: 0 10px 10px 10px;
  
  `
const Title = styled.p``
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
const Price = styled.div``
const Rating = styled.div``

const OptionsBackground = styled("div").withConfig({
  shouldForwardProp: (props) => {
    return props !== "isVisible";
  },
}) <{ isVisible: boolean }>`
  display: ${(props) => props.isVisible? "block": "none"};
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: gray;
  height: 100%;
  width: 275px;
  z-index: 2;
  opacity: 20%;

  align-items: center;
  justify-content: center;
  gap: 10px;

`

const Options = styled("div").withConfig({
  shouldForwardProp: (props) => {
    return props !== "isVisible";
  },
}) <{ isVisible: boolean }>`
  display: ${(props) => props.isVisible? "flex": "none"};
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 275px;
  z-index: 3;

  align-items: center;
  justify-content: center;
  gap: 10px;

`

const CircleButton = styled.button`
  all:unset;
  height: 50px;
  width: 50px;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius: 50%;
  background-color: #ffffff;
  cursor: pointer;
  opacity:100%;
  transition : all 0.25 ease-in-out ;

  &:hover {
    filter: brightness(0.8);
  }

  &:active {
    filter: brightness(0.5);

  }
`

const LinkOptionButton = styled.a`
  all:unset;
  height: 50px;
  width: 50px;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius: 50%;
  background-color: #ffffff;
  cursor: pointer;
  opacity:100%;
  transition : all 0.25 ease-in-out ;

  &:hover {
    filter: brightness(0.8);
  }

  &:active {
    filter: brightness(0.5);

  }
`

const OptionButton = (props:{
  children?:JSX.Element, 
  onClick?: () => void}) => {

  return(
    <CircleButton onClick={props.onClick}>{props.children}</CircleButton>
  )
}

const ItemCard = (prop: NewDeals) => {
  const {title, price, rating, reviews, url, imageURL} = prop
  const [mouseEnter, useMouseEnter] = useState(false);
  const [isFavorite, useIsFavorite] = useState(false);

  const handleMouseEnter = () => {
    useMouseEnter(true);
  }

  const handleMouseLeave = () => {
    useMouseEnter(false);
  }

  const handleOnFavorite = () => {
    useIsFavorite(!isFavorite);
  }

  return (
    <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ImageArea>
          <Image  src={imageURL} alt='product'/>
        </ImageArea>
        <Details>
          <Title>{title}</Title>
          <Bottom>
            <Price>$ {price}</Price>
            <Rating>{"*".repeat(rating)+`(${reviews})`}</Rating>
          </Bottom>
        </Details>
        <OptionsBackground isVisible={mouseEnter}>
          
        </OptionsBackground>
        <Options isVisible={mouseEnter}>
          <OptionButton>
            <span className="material-icons-outlined">
              shopping_cart
            </span>
          </OptionButton>
          <OptionButton onClick={handleOnFavorite}>{
            isFavorite?
            <FavoriteIcon style={{color: "pink"}}/>:
            <FavoriteBorderIcon/>}
            </OptionButton>
          <LinkOptionButton href={url}>
            <span className="material-icons-outlined">
              search
            </span>
        </LinkOptionButton>
        </Options>
    </Card>
  )
}

export default ItemCard