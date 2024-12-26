import instance from '../../api/instance'
import { useEffect, useState } from "react";
import styled from "styled-components";

function ListUser() {
  const [data, setData] = useState([]);

  async function fetchData() {
    // axios instance를 활용해서 api 연동함 
    const response = await instance.get("api/users?page=2");
    console.log("response:::", response);
    setData(response.data.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  console.log("data:::", data);
  return (
    <>
      {data.map((item) => (
        <Wrapper>
            <UserImg src={item.avatar}/>
          <Container >
            <h2>name: {item.first_name}{item.last_name}</h2>
            <p>
                email: {item.email}
            </p>
          </Container>
        </Wrapper>
      ))}
    </>
  );
}

export default ListUser;

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
  width: 50%;
  margin: 0;
  padding: 0 20px;
`;

const UserImg = styled.img`
margin: 10px;
border-radius: 20px;
`