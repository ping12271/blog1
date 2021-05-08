import React, {useEffect, useState} from "react";
import styled from "styled-components";
import BlogList from "../components/Blog/BlogList";

const ListContainer = () => {

    const [blog, setBlog] = useState([1,2])

    useEffect(() => {
        getBlog();
    })

    const getBlog = () => {
        //  블로그 데이터를 비동기 통신해서 가져 옴
    }

    return (
        <Container>
            <BlogList data={blog}/>
        </Container>
    )
}

const Container = styled.div`

`;

export default ListContainer;