import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Header() {
  const navigate = useNavigate();

  const handleOnclick = () => {
    navigate("/");
  };
  return (
    <Wrapper>
      <Container>
        <p onClick={handleOnclick}>풍생고</p>
      </Container>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  z-index: 1000;
  @font-face {
    font-family: "RiaSans-ExtraBold";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/2410-1@1.0/RiaSans-ExtraBold.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.backgroundColors.page};
  width: ${({ theme }) => theme.tablet};
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
  }
  p {
    padding: 20px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "RiaSans-ExtraBold";
    font-size: 50px;

    color: ${({ theme }) => theme.colors.logo};
    &:hover {
      color: ${({ theme }) => theme.colors.logoHover};
    }
  }
`;
