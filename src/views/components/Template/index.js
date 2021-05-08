import React from "react";
import styled from "styled-components";
import Menu from "../Menu";

const Template = ({children}) => {

  return (
    <Container>
        <Menu/>
        <MainContents>
            {children}
        </MainContents>
    </Container>
  )
}

const Container = styled.div`
  padding-left: 300px;
`;

const MainContents = styled.div`
  padding: 20px;
`;

export default Template;