import React, {useState} from "react";
import styled from "styled-components";
import axios from 'axios';

const BlogForm = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const result = await axios({
            method: 'post',
            url: 'http://localhost:4000/blog',
            data: {
                title,
                content
            }
        })
    }

  return (
    <Container>
        <form onSubmit={onSubmit}>
            <FormGroup>
                <label htmlFor="title">제목</label>
                <input
                    type="text"
                    id={'title'}
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}
                />
            </FormGroup>
            <FormGroup>
                <label htmlFor="title">내용</label>
                <textarea id="content"
                          onChange={(e) => {setContent(e.target.value)}}
                />
            </FormGroup>
            <button>추가</button>
        </form>
    </Container>
  )
}

const Container = styled.div`

`;

const FormGroup = styled.div`

`;

export default BlogForm;