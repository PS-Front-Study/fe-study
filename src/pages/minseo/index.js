import styled from "styled-components";

function MinSeoPage() {
  return (
    <>
      <Wrapper>
        <Container>
          <MyPhotoBox>
            <img
              src={
                "https://i.pinimg.com/736x/2c/02/31/2c02317e875c7253f09f7827e297cbb5.jpg"
              }
            />
          </MyPhotoBox>
          <ContentsBox>
            <PersonalData>
              <h1>김민서</h1>
              <h2>07.10.13</h2>
              <h2>풍생고</h2>
              <h2>남자</h2>
              <h2>@K_mxnsxo</h2>
            </PersonalData>
          </ContentsBox>
        </Container>
      </Wrapper>
    </>
  );
}

export default MinSeoPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: #3A5E87;
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: a;
`;

const MyPhotoBox = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin: 10px;
  img {
    border-radius: 20px;
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
`;
const ContentsBox = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 10px;
  font-size: 10px;
  text-align: left;
`;
const PersonalData = styled.div``;
