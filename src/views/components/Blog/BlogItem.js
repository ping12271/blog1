import React from "react";
import styled from "styled-components";
import moment from 'moment';
import {navigate} from "../../../lib/history";

const BlogItem = ({title, content, create_at, _id}) => {

  return (
    <Container onClick={() => navigate(`/detail/${_id}`)}>
        <h3>{title}</h3>
        <p>{content}</p>
        <span>{moment(create_at).format('YYYY-MM-DD hh:mm')}</span>
    </Container>
  )
}

const Container = styled.div`
  background: #f5f5f5;
  box-shadow: 1px 1px 10px rgba(0,0,0, .15);
  border-radius: 9px;
  padding: 30px;
`;

export default BlogItem;