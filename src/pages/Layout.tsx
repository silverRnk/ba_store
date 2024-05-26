import { styled } from "styled-components";
import Navbar from "../ui/components/Navbar";
import { Outlet } from "react-router-dom";
import MerchThemes from "../ui/components/MerchThemes";

const Container = styled.div`
  height: auto;
  min-height: 100vh;
  /* overflow-x: hidden; */
  background: linear-gradient(
    135deg,
    #6ae8ff 0%,
    #fafafa 42.29%,
    #fafafa 69.06%,
    #6ae8ff 97.19%
  );
`;

const Wrapper = styled.div`
  height: auto;
  /* min-height: 100vh; */
  position: relative;
`;

const OutletWrapper = styled.div`
  width: 100%;
  height: auto;
  z-index: 2;

  padding: 16px 12px;
`;

const Layout = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Wrapper>
          <svg width={125} height={108} className="triangle-1">
            <polygon
              points="0,0 62.5,108 125,0"
              style={{ fill: "gray", opacity: "0.3" }}
            ></polygon>
          </svg>
          <OutletWrapper>
            <MerchThemes />
            <Outlet />
          </OutletWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Layout;
