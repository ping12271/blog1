import React from "react";
import styled from "styled-components";
import {navigate} from "../../../lib/history";

const Menu = () => {

    return (
        <Container>
            <Nav>
                <NavLink onClick={() => navigate('/')}>List</NavLink>
                <NavLink onClick={() => navigate('/write')}>Write</NavLink>
            </Nav>
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  width: 300px;
  background: #fff;
  border: 1px solid #eee;
`;

const Nav = styled.div`
  padding: 30px;
`;

const NavLink = styled.a`
  display: block;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  text-transform: capitalize;
  cursor: pointer;
`;

export default Menu;