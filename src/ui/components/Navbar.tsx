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
  background-color: #fefefe;
  z-index:50;

  @media only screen and (max-width: 480px) {
    height:auto;
  }

`
const Default = styled.div`
  display:flex;
  height: 75px;
  width:100vw;

  @media only screen and (max-width: 480px) {
    display:none;
  }
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
    width:${(props) => (props.isVisible ? "300px" : "inherit")};
  }

  @media only screen and (max-width: 480px) {
    grid-column: span 4;
    grid-row: 1/4;
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



// Layout for 480px belowe
const SmallScreen = styled.div`
  display:none;

  @media only screen and (max-width: 480px) {
    width:100vw;
    display:flex;
    flex-direction:column;
    gap: 10px;
    margin:0.5rem 0.1rem 0.5rem 0.1rem;
  }
`

const Top = styled.div`
  font-size:2rem;
  display:flex;
  justify-content:center;
`

const Bottom = styled.div`
  width:100%;
  display:flex;
  gap:0.5rem;
  justify-content:center;
  align-items:center;
`

const BottomWrapper = styled("div").withConfig({
  shouldForwardProp: (props) => {
    return props !== "isVisible";
  },
}) <{ isVisible: boolean }>`
  width:100%;
  display:${(props) => (props.isVisible ? "flex" : "none")};
  gap:0.5rem;
  justify-content:center;
  align-items:center;
`;

const SmallSearchBarWrapper = styled("div").withConfig({
  shouldForwardProp: (props) => {
    return props !== "isVisible";
  },
}) <{ isVisible: boolean }>`
  width:100%;
  gap:0.5rem;
  display:${(props) => (props.isVisible ? "flex" : "none")};
  justify-content:space-between;
  align-items:center;
  margin:0 1rem;

`;

// End

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

const Center = styled("div").withConfig({
  shouldForwardProp: (props) => {
    return props !== "isVisible";
  },
}) <{ isVisible: boolean }>`
    flex:1;
    max-width: 500px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 0 auto;

  @media only screen and (max-width:720px){
    display: ${(props) => props.isVisible ? "flex": "none"}
    width:inherit;
    margin: 0 0 0 auto;
  }
`;
const IconWrapper = styled("button").withConfig({
  shouldForwardProp: (props) => {
    return props !== "isVisible";
  },
}) <{ isVisible: boolean }>`
  all:unset;
  display: none;

  @media only screen and (max-width:720px){
    display: ${(props) => (props.isVisible ? "block" : "none")};
    width:50px;
    height:50px;
    cursor:pointer;
    background-color:transparent;
  }

  &:hover:{
    filter:brightness(0.7);
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
  gap: 5px;

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

      <Default>
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
        <Center id="center" isVisible={isVisible}>
          <Searchbox isVisible={isVisible} />
          
        </Center>
        <Right isVisible={!isVisible}>
        <IconWrapper id="search-button" isVisible={!isVisible}>
            <Magnify
              onClick={() => {
                setIsVisible(!isVisible);
              }}
            />
          </IconWrapper>
          <CartLink>
            <ShoppingCartIcon />
          </CartLink>

          <AccountMenu/>

          <LanguageOptions/>
        </Right>
      </Default>
      
      <SmallScreen>
        <Top>
          <LogoWrapper id="logo-wrapper" isVisible={true}>
            S.C.H.A.L.E
          </LogoWrapper>
        </Top>
        <Bottom>

          <BottomWrapper isVisible={!isVisible}>
            <IconWrapper id="search-button" isVisible={!isVisible}>
              <Magnify
                onClick={() => {
                  setIsVisible(!isVisible);
                }}
              />
            </IconWrapper>
            <CartLink>
              <ShoppingCartIcon />
            </CartLink>

            <AccountMenu/>

            <LanguageOptions/>
          </BottomWrapper>

          <SmallSearchBarWrapper isVisible={isVisible}>
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

            <Searchbox isVisible={isVisible} />

          </SmallSearchBarWrapper>
        
        </Bottom>
      </SmallScreen>

    </Nav>
  );
};

export default Navbar;
