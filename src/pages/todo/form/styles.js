/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 300px;
  align-items: center;
  justify-content: center;

  form {
    padding: 40px;
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      font-size: 25px;
      color: #444;

      span {
        display: block;
        margin-bottom: 8px;
      }

      input {
        font-size: 18px;
        color: #444;
        padding: 12px 20px;
        border: 0;
        border-radius: 5px;
        border-bottom: 3px solid #ddd;
        width: 80%;
      }
    }

    div {
      margin-top: 20px;

      span {
        font-size: 25px;
        color: #444;
      }
    }
  }
`;
