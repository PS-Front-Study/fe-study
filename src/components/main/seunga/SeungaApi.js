import styled from "styled-components";
import instance from "../../../api/instance";
import { useState, useEffect } from "react";

function SeungaApi() {
    const [data, setData] = useState([]);

    async function getApi() {
       const response = await instance.get("api/users/2");
       setData(response.data.data);
    }
    console.log('승아Api',data)

    useEffect(() => {
        getApi()
    },[])

    return(
    <>
<Wrapper>
    <Container>
<p>email:{data.email}</p>
<p>name:{data.first_name}{data.last_name}</p>
    </Container>
</Wrapper>
    </>
    );
}

    export default SeungaApi;

    const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 10px;
    userInformation:'#8B96D6',
    border: 5px solid ${({ theme })=> theme.borderColors.userInformation};
border-radius: 20px;

    background-color: white;
  `;
  
  const Container = styled.div`
    border: 2px solid ${({ theme }) => theme.borderColors.userInformation};
    border-radius: 20px;
    width: 200px;
    margin: 0;
    padding: 0 20px;
  `;