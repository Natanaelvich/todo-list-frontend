/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 90%;
    padding: 20px 0px;
    background: #111;
    display: flex;
    border-radius: 10px;
    align-items: baseline;

    img {
      height: 30px;
      margin-right: 20px;
      margin-left: 10px;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ddd;
  font-weight: bold;
  font-size: 18px;
  margin-right: 10px;

  &:hover {
    opacity: 0.7;
  }
`;
