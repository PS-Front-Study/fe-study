import {Route, Routes} from "react-router-dom";
import './App.css';
import MainPage from "./pages/main";
import styled from "styled-components";
import SeoYeonPage from "./pages/seoyeon";
import SeungAhPage from "./pages/seungah";

function App() {
  return (
      <Wrapper>
          <Routes>
              <Route path="/" element={<MainPage/>} />
              <Route path="/seoyeon" element={<SeoYeonPage/>} />
              <Route path="/seungah" element={<SeungAhPage/>} />
          </Routes>
      </Wrapper>
  )
  ;
}

export default App;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #6d8b9f;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    
`
