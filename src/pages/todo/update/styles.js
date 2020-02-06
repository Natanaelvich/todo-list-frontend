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

  button {
    width: 50%;
    padding: 10px 0;
    border: 0;
    background: gray;
    margin-top: 20px;
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    transition: padding 0.3s, width 0.3s, box-shadow 0.3s;

    &:hover {
      opacity: 0.7;
      padding: 13px 0px;
      width: 52%;

      -webkit-box-shadow: -7px 6px 5px -1px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: -7px 6px 5px -1px rgba(0, 0, 0, 0.75);
      box-shadow: -7px 6px 5px -1px rgba(0, 0, 0, 0.75);
    }
  }
`;
