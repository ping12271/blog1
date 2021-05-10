import React, {useState, useEffect} from "react";
import styled from "styled-components";
import BlogForm from "../components/Blog/BlogForm";
import axios from "axios";
import {withRouter} from "react-router-dom";
import {navigate} from "../../lib/history";

const EditContainer = ({match}) => {

    const [blog, setBlog] = useState({})
    const id = match.params.id;

    useEffect(() => {
        getBlogById()
    }, [])

    const getBlogById = async () => {
        const result = await axios({
            method: 'get',
            url: `http://localhost:4000/blog/${id}`,
        })
        setBlog(result.data)
    }

    const onSubmit = async (data) => {
        console.log('@@', data)
        const result = await axios({
            method: 'put',
            url: `http://localhost:4000/blog/${id}`,
            data
        })
        console.log(result)
        navigate(`/detail/${id}`)
    }

    if (!blog.title) return null;

    return (
        <Container>
            <BlogForm
                onSubmit={onSubmit}
                buttonText={'수정하기'}
                defaultValues={blog}
            />
        </Container>
    )
}

const Container = styled.div`

`;

export default withRouter(EditContainer);