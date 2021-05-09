import React, {useState} from "react";
import styled from "styled-components";
import axios from 'axios';
import {navigate} from "../../../lib/history";
import {Button} from "../Button/Button.Styled";
import {ButtonEnum} from "../../../constants";

const BlogForm = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios({
            method: 'post',
            url: 'http://localhost:4000/blog',
            data: {
                title,
                content
            }
        })
        navigate('/')
    }

  return (
    <Container>
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label htmlFor="title">제목</Label>
                <Input
                    type="text"
                    id={'title'}
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="title">내용</Label>
                <Textarea id="content"
                          onChange={(e) => {setContent(e.target.value)}}
                />
            </FormGroup>
            <Button sort={ButtonEnum.Primary}>추가</Button>
        </Form>
    </Container>
  )
}

const Container = styled.div`

`;

const FormGroup = styled.div`
  margin-bottom: 30px;
`;

const Form = styled.form`

`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  height: 40px;
  display: block;
  width: 100%;
  padding: 8px;
  
  &:focus {
    outline: 0;
  }
`;

const Textarea = styled.textarea`
  border: 1px solid #ddd;
  height: 500px;
  display: block;
  width: 100%;
  padding: 8px;
  resize: none;

  &:focus {
    outline: 0;
  }
`;

export default BlogForm;