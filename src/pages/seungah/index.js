import styled from "styled-components";

function SeungAhPage() {
    return (
        <>

            <Wrapper>
                <Container>
                    <MyPhotoBox>
                        {/*나의 사진 혹은 내가 좋아하는 사진 넣어주기~*/}
                        <img src={"https://i.pinimg.com/control/564x/58/69/d6/5869d65fce581f894d44dcf2807332ef.jpg"}/>
                    </MyPhotoBox>
                    <ContentsBox>
                        <PersonalData>
                            <h1>이름</h1>
                            <h2>생년월일</h2>
                            <h2>MBTI</h2>
                            <h2>학교</h2>
                            <h2>인스타그램</h2>
                        </PersonalData>
                    </ContentsBox>
                </Container>
            </Wrapper>
        </>

    );
}

export default SeungAhPage;

const Wrapper = styled.div`
    background: lightblue;
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

