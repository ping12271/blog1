import React from "react";
import styled from "styled-components";
import BlogForm from "../components/Blog/BlogForm";
import axios from "axios";
import {withRouter} from "react-router-dom";
import {navigate} from "../../lib/history";

const EditContainer = ({match}) => {

    const id = match.params.id;
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

  return (
    <Container>
        <BlogForm onSubmit={onSubmit} buttonText={'수정하기'}/>
    </Container>
  )
}

const Container = styled.div`

`;

export default withRouter(EditContainer);