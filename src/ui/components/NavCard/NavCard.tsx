import { css, styled } from "styled-components";

const Container = styled("div").withConfig({
  shouldForwardProp: (props) => {
    return props !== "backgroundImg";
  },
})<{ backgroundImg?: string }>`
  width: 225px;
  height: 110px;
  background-image: 'url("'+ ${(props) => props.backgroundImg} + '")';
  background-color: lightblue;
  border: 1px solid #2e2e2e;
  text-align: center;
  line-height: 110px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.7);
  }
`;

const NavCard = ({
  title,
  backgroundImg,
  link,
}: {
  title: string;
  backgroundImg?: string;
  link?: string;
}) => {
  return (
    <Container backgroundImg={backgroundImg}>
      <a href={link ?? ""}>{title}</a>
    </Container>
  );
};

export default NavCard;
