import React from "react";
import styled from "styled-components";
import BlogForm from "../components/Blog/BlogForm";
import axios from "axios";
import {navigate} from "../../lib/history";

const WriteContainer = () => {

    const onSubmit = async (data) => {
        await axios({
            method: 'post',
            url: 'http://localhost:4000/blog',
            data
        })
        navigate('/')
    }

  return (
    <Container>
        <BlogForm onSubmit={onSubmit} buttonText={'추가하기'}/>
    </Container>
  )
}

const Container = styled.div`

`;

export default WriteContainer;