import React from "react";
import styled from "styled-components";
import BlogItem from "./BlogItem";

const BlogList = ({data = []}) => {

  return (
    <Container>
        <Row>
        {
            data.map((item, index) => (
                <Col key={index}>
                    <BlogItem {...item}/>
                </Col>
            ))
        }
        </Row>
    </Container>
  )
}

const Container = styled.div`

`;

const Row = styled.div`
    
`;

const Col = styled.div`
  padding: 15px;
`;

export default BlogList;