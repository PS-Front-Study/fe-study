import instance from '../../api/instance'
import { useEffect, useState } from "react";
import styled from "styled-components";

function SeoyeonApi() {
    const [data, setData] = useState([]);

    async function fetchData() {
        const response = await instance.get("/api/users/2")
        setData(response.data.data);
    }
    useEffect(() => {
        fetchData();
    }, []);
    console.log("서연의 Api:::", data)

    return (
        <>
        <Wrapper>s
                <p> {data.email} </p>
                <p> {data.first_name}{data.last_name}</p>
        </Wrapper>
        </>
    )
};

export default SeoyeonApi;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  background-color: white;
`;

