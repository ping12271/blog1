import React, {useEffect, useState} from "react";
import styled from "styled-components";
import axios from 'axios';
import BlogList from "../components/Blog/BlogList";

const ListContainer = () => {

    const [blog, setBlog] = useState([])

    useEffect(() => {
        getBlog();
    }, [])

    const getBlog = async () => {
       const result = await axios.get('http://localhost:4000/blog')
        if(result.data) {
            setBlog(result.data)
        }
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