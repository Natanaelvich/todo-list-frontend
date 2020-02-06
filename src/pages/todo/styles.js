/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 50px;
`;
export const ListTodo = styled.ul`
  background: #ddd;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  li {
    padding: 20px;
    border-radius: 10px;
    list-style: none;
    margin-bottom: 20px;
    background: #fff;
    display: flex;
    align-items: center;

    h1 {
      font-size: 18px;
      color: #444;
      font-weight: 500;
      margin-right: 20px;
    }
    div {
      display: flex;
      flex: 1;
      justify-content: flex-end;

      > button {
        margin-right: 20px;
        padding: 6px 9px;
        border-radius: 10px;
        border: 0;
        color: #ddd;
        font-weight: bold;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  align-self: flex-end;
  text-decoration: none;
  color: #ddd;
  background: green;
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: bold;

  &:hover {
    opacity: 0.7;
  }
`;
export const Remove = styled.button`
  background: #d02e2e;
`;
export const Edit = styled.button`
  background: #484fb9;
`;
