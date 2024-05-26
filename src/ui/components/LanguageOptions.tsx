import { useState } from "react";
import { styled } from "styled-components";
import LanguageIcon from "@mui/icons-material/Language";

const LanguageOptionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const LangButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const LangMenu = styled("div").withConfig({
  shouldForwardProp: (props) => {
    return props !== "isShown";
  },
})<{ isShown: boolean }>`
  display: ${(props) => (props.isShown ? "block" : "none")};
  position: absolute;
  top: 100%;
  right: 25%;
  margin: 20px 0 0 0;
  height: 200px;
  width: 300px;
  background-color: blue;
  border-radius: 16px;
  box-shadow: 0 0 5px gray;
`;

const LanguageOptions = () => {
  const [isShown, setIsShown] = useState(false)
  return (
    <LanguageOptionContainer>
      <LangButton onClick={() => setIsShown(!isShown)}>
        <LanguageIcon  />
      </LangButton>
      <LangMenu isShown={isShown}/>
    </LanguageOptionContainer>
  );
};

export default LanguageOptions;
