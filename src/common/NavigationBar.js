import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiftBox } from "../assets/icons";
import { DogIcon} from "../assets/icons";
import { CatIcon} from "../assets/icons";

function NavigationBar() {
  return (
    <>
      <Wrapper>
        <Container>
          <StyledLink to={"/seoyeon"}>
            <IconBox>
              <DogIcon />
              <p>서연</p>
            </IconBox>
          </StyledLink>
          <StyledLink to={"/seungah"}>
            <IconBox>
              <CatIcon/>
              <p>승아</p>
            </IconBox>
          </StyledLink>

          <StyledLink to={"/minseo"}>
            <IconBox>
              <GiftBox />
              <p>민서</p>
            </IconBox>
          </StyledLink>
        </Container>
      </Wrapper>
    </>
  );
}

export default NavigationBar;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
  height: 100px;
  width: 100%;

`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: ${({ theme }) => theme.backgroundColors.navigation};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: ${({ theme }) => theme.tablet};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.naviFont};
  &:hover {
    color: ${({ theme }) => theme.colors.logoHover};
  }
`;
const IconBox = styled.div`
  padding: 10px;
  justify-content: center;
  p {
    text-align: center;
    margin: auto;
  }
`;
