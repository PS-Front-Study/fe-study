import styled from "styled-components";
import ColorInformation from "../../components/main/ColorInformation";
import ListUser from "../../components/main/ListUsers";

function MainPage() {
  return (
    <>
      <Wrapper>
        <Contents>
          <p>같이 공부해요</p>
          <ImgBox>
            <img
              src={
                "https://i.pinimg.com/736x/2c/02/31/2c02317e875c7253f09f7827e297cbb5.jpg"
              }
            />
          </ImgBox>
        </Contents>
      </Wrapper>
      <InformationBox>
        <ColorInformation />
        <ListUser/>
      </InformationBox>
    </>
  );
}

export default MainPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @font-face {
    font-family: "RiaSans-ExtraBold";
    src: url("https://fastly.jsdelivr.net/gh/projectnoonnu/2410-1@1.0/RiaSans-ExtraBold.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  p {
    display: flex;
    justify-content: center;
    font-family: "RiaSans-ExtraBold";
    font-size: 30px;
    margin: 20px;
    color: ${({ theme }) => theme.colors.font};
  }
  span {
    display: flex;
    justify-content: center;
    padding: 10px;
  }
`;

const Contents = styled.div``;

const ImgBox = styled.div`
  img {
    border-radius: 20px;
    height: 300px;
  }
`;

const InformationBox = styled.div`
  margin-bottom: 100px;
`;
