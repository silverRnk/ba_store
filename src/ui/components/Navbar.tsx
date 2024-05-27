import { useState} from "react";
import { styled } from "styled-components";
import Magnify from "../icons/Magnify";
import Searchbox from "./Searchbox";


//Material Icons
import ArrowLeft from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


import LanguageOptions from "./LanguageOptions";
import AccountMenu from "./ProfileMenu";

const Nav = styled.div`
  display:flex;
  height: 75px;
  background-color: #fefefe;
`

const Left = styled("div").withConfig({
  shouldForwardProp: (props) => {
    return props !== "isVisible";
  },
}) <{ isVisible: boolean }>`
  width: 200px;
  padding-left:10px;
  display:flex;
  align-items:center;
  font-size:1.75rem;

  @media only screen and (max-width: 720px) {
    width:${(props) => (props.isVisible ? "300px" : "inherit")};;
  }
`;
const LogoWrapper = styled("div").withConfig({
  shouldForwardProp: (props) => {
    return props !== "isVisible";
  },
}) <{ isVisible: boolean }>`
  @media only screen and (max-width: 720px) {
    display: ${(props) => (props.isVisible ? "block" : "none")};
    
  }
`;



const BackSpcButton = styled("button").withConfig({
  shouldForwardProp: (props) => {
    return props !== "isVisible";
  },
}) <{ isVisible: boolean }>`
  display: none;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color:gray;

  @media only screen and (max-width:720px){
    display: ${(props) => (props.isVisible ? "flex" : "none")};
    align-items:center;
    justify-content:center;
`;

const Center = styled.div`
    width:500px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 0 auto;

@media only screen and (max-width:720px){
  width:inherit;
  margin: 0 0 0 auto;
}
`;
const IconWrapper = styled("button").withConfig({
  shouldForwardProp: (props) => {
    return props !== "isVisible";
  },
}) <{ isVisible: boolean }>`
  display: none;

  @media only screen and (max-width:720px){
    display: ${(props) => (props.isVisible ? "block" : "none")};
    
  }

  @media only screen and (max-width: 720px) {
    display: ${(props) => (props.isVisible ? "block" : "none")};
  }
`;

const Right = styled("div").withConfig({
  shouldForwardProp: (props) => {
    return props !== "isVisible";
  },
}) <{ isVisible: boolean }>`
  display: flex;
  width: auto;
  align-items: center;
  gap: 5pxs
  @media only screen and (max-width: 720px) {
    display: ${(props) => (props.isVisible ? "flex" : "none")};
  }
`;

const CartLink = styled.a`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  text-align:center;
  line-height:50px
`

// &::after{
//   content: "";
//   position: absolute;
//   bottom:100%;
//   right: 5%;
//   rotate:180deg;
//   margin-left: -5px;
//   border-width: 7px;
//   border-style: solid;
//   border-color: #00ff00 transparent transparent transparent;
//   }


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Nav>
      <Left isVisible={isVisible}>
        <LogoWrapper id="logo-wrapper" isVisible={!isVisible}>
          S.C.H.A.L.E
        </LogoWrapper>

        <BackSpcButton
          id="backspace-button"
          className="md:hidden"
          isVisible={isVisible}
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        >
          <ArrowLeft />
        </BackSpcButton>
      </Left>
      <Center id="center">
        <Searchbox isVisible={isVisible} />
        <IconWrapper id="search-button" isVisible={!isVisible}>
          <Magnify
            onClick={() => {
              setIsVisible(!isVisible);
            }}
          />
        </IconWrapper>
      </Center>
      <Right isVisible={!isVisible}>
        <CartLink>
          <ShoppingCartIcon />
        </CartLink>

        <AccountMenu/>

        <LanguageOptions/>
      </Right>


    </Nav>
  );
};

export default Navbar;
