import styled from "styled-components";
import SeoyeonApi from "../../components/seoyeon/seoyeonApi";

function SeoYeonPage() {
    return (
        <>
            <Wrapper>
                <Container>
                    <MyPhotoBox>
                        {/*나의 사진 혹은 내가 좋아하는 사진 넣어주기~*/}
                        <img src={"https://i.pinimg.com/564x/4a/93/ae/4a93ae0e9fbf96e68a84b4fad16ef748.jpg"}/>
                    </MyPhotoBox>
                    <ContentsBox>
                        <PersonalData>
                            <h1>최서연</h1>
                            <h2>07.05.17</h2>
                            <h2>ENTP</h2>
                            <h2>여자</h2>
                            <h2>csy_jane7</h2>
                            <p>학원가야함</p>
                        </PersonalData>
                    </ContentsBox>
                    <SeoyeonApi/>
                </Container>
            </Wrapper>

        </>


    );
}

export default SeoYeonPage;

const Wrapper = styled.div`
    background: #c190ff;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    overflow-y: scroll; // 페이지 길어지면 스크롤함 
  -ms-overflow-style: none;
  scrollbar-width: none;
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

