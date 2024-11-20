import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

function UserInformation() {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await axios.get(" https://koreanjson.com/users");
    setData(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data)

  return (
    <>
      {data.map((item) => (
        <Wrapper>
          <Container>
            <h2>{item.name}</h2>
            <p>아이디: {item.username}</p>
            <p>이메일: {item.email}</p>
            <p>홈페이지: {item.website}</p>
          </Container>
        </Wrapper>
      ))}


    </>
  );
}

export default UserInformation;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
`;

const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.borderColors.userInformation};
  border-radius: 20px;
  width: 80%;
  margin: 0;
  padding: 0 20px;

`;
