import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

function ColorInformation() {
  const [data, setData] = useState([]);
  
  async function fetchData() {
    const response = await axios.get("https://reqres.in/api/unknown");
<<<<<<< Updated upstream

    setData(response.data.data);
    console.log(response.data);
  
=======
    setData(response.data.data);
    console.log(response.data)
>>>>>>> Stashed changes
  }
  useEffect(() => {
    fetchData();
  }, []);

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  return (
    <>
        {/* <Wrapper>
        {data.map((item) => (
          <Container color={item.color}>
            <h2>color: {item.name}</h2>
          </Container>
            ))}
        </Wrapper> */}


    </>
  );
}

export default ColorInformation;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  width: 100%;
  overflow-x: auto; 
`;

const Container = styled.div`
  border: 2px solid ${({ theme }) => theme.borderColors.userInformation};
  border-radius: 20px;
  width: 80%;
  margin: 0;
  background-color: ${(props) => props.color};
  width: 200px;
  height: 100px;
  margin: 10px;
  flex-shrink: 0;
  text-align: center;
`;
