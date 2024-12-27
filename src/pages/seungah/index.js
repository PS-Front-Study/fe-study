import styled from "styled-components";
import SeungaApi from "../../components/main/seunga/SeungaApi";

function SeungAhPage() {
    return (
        <>

            <Wrapper>
                <Container>
                    <MyPhotoBox>
                        {/*나의 사진 혹은 내가 좋아하는 사진 넣어주기~*/}
                        <img src={"https://i.pinimg.com/736x/de/48/12/de48125fedb8b893ad1852393ab14946.jpg"}/>
                    </MyPhotoBox>
                    <ContentsBox>
                        <PersonalData>
                            <h1>백승아</h1>
                            <h2>07.04.23</h2>
                            <h2>ENFP</h2>
                            <h2>풍생고</h2>
                            <h2>white.winah</h2>
                        </PersonalData>
                    </ContentsBox>
                    <SeungaApi></SeungaApi>
                </Container>
            </Wrapper>
        </>

    );
}

export default SeungAhPage;

const Wrapper = styled.div`
 overflow-y: scroll; // 페이지 길어지면 스크롤함 
  -ms-overflow-style: none;
  scrollbar-width: none;
    background: lightpink;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
`

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: a;
`

const MyPhotoBox = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 10px;
    img{
        border-radius: 20px;
        width: 200px;
        height: 200px;
        object-fit: cover;
    }

`
const ContentsBox = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 10px;
    font-size: 10px;
    text-align: left;
    
`
const PersonalData= styled.div`
    
`

