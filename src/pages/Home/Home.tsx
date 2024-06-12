import React from "react";
import BannerSlide from "../../ui/components/BannerSlide/BannerSlide";
import NavCard from "../../ui/components/NavCard/NavCard";
import { cardNavigation } from "../../data";
import { styled } from "styled-components";
import ItemCard from "../../ui/components/ItemCard";


//Mockdate
import { newDeals } from "../../data";


const Wrapper = styled.div`
`

const NavCardWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin: 24px 32px;
  justify-content: center;
`;

const PlaceHolder = styled.div`
  height: 500px;
`

const NewDeals = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
`

const ProductWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
`

const Home = () => {
  return (
    <Wrapper>
      <BannerSlide></BannerSlide>
      <NavCardWrapper>
        {cardNavigation.map((ea) => (
          <NavCard
            title={ea.title}
            backgroundImg={ea.backgroundImg}
          />
        ))}
      </NavCardWrapper>
      <NewDeals>
        <Title>New Deals</Title>
        <ProductWrapper>
          {newDeals.map((item) => <ItemCard {...item}/>)}
        </ProductWrapper>

      </NewDeals>
    </Wrapper>
  );
}

export default Home;
