import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main";
import styled from "styled-components";
import SeoYeonPage from "./pages/seoyeon";
import SeungAhPage from "./pages/seungah";
import Header from "./common/Header";
import NavigationBar from "./common/NavigationBar";
import MinSeoPage from "./pages/minseo";

function App() {
  return (
    <>
      <Wrapper>
        <Header/>
        <Container>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/seoyeon" element={<SeoYeonPage />} />
            <Route path="/seungah" element={<SeungAhPage />} />
            <Route path="/minseo" element={<MinSeoPage/>}/>
          </Routes>
        </Container>
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.backgroundColors.page};
`;

const Container = styled.div`
  margin: auto;
  width: ${({ theme }) => theme.tablet};
  height: 100vh;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
  }
`;
