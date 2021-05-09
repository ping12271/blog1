import styled, {css} from 'styled-components';
import {ButtonEnum} from "../../../constants";

export const Button = styled.button`
  padding: 0 15px;
  height: 34px;
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #aaa;
  color: #555;
  background: #fff;
  border-radius: 3px;
  cursor: pointer;
  ${props => props.sort === ButtonEnum.Primary && css`
    background: #18f;
    color: #fff;
    border: 1px solid #18f;
  `}
  ${props => props.sort === ButtonEnum.Info && css`
    background: #1f9811;
    color: #fff;
    border: 1px solid #1F9811;
  `}
`;