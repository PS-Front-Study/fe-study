import styled from "styled-components";


function MainPage() {

    return (
        <Wrapper>
            <ImgBox>
                <img src={'https://i.pinimg.com/control/564x/24/37/bb/2437bbd6e6330d20dac79146add7e8f7.jpg'}/>
            </ImgBox>
            <ItemBox>
                <h1>메인 페이지입니다 ٩( ᐛ )و </h1>
            </ItemBox>
        {/*    여기에 서연이랑 승아 페이지로 이동할 수 있는 버튼을 만들어 주세요!! */}

        </Wrapper>

    );
}

export default MainPage;
const Wrapper = styled.div`
`;



const ImgBox = styled.div`
   img{
       border-radius: 20px;   
   }
`


const ItemBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    @font-face {
        font-family: 'HSSanTokki20-Regular';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2405@1.0/HSSanTokki20-Regular.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    h1{
        color: white;
        font-family: 'HSSanTokki20-Regular';
        
    }
`

