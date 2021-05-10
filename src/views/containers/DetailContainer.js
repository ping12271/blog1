import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {withRouter} from "react-router-dom";
import axios from "axios";
import {Button} from "../components/Button/Button.Styled";
import {ButtonEnum} from "../../constants";
import {navigate} from "../../lib/history";

const DetailContainer = ({match}) => {

    const id = match.params.id;
    const [blog, setBlog] = useState({})

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

    const onDelete = async () => {
        const result = await axios({
            method: 'delete',
            url: `http://localhost:4000/blog/${id}`,
        })
        navigate('/')
    }

    // if(!blog.title) {
    //     navigate('/')
    //     return null
    // }

    return (
        <Container>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <Button sort={ButtonEnum.Info} onClick={() => navigate(`/edit/${id}`)}>수정하기</Button>
            <Button sort={ButtonEnum.Danger} onClick={onDelete}>삭제하기</Button>
        </Container>
    )
}

const Container = styled.div`

`;

export default withRouter(DetailContainer);