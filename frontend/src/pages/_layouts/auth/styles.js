import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-0deg, #193f48, #3b6770);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
      font-size: 55px;
      color: #e27f46;
    }

    strong {
      margin-top: 5px;
      color: #e27f46;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 9px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #f17865;
      align-self: flex-start;
      margin: 0 0 10px 0;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #e27f46;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 9px;
      font-size: 16px;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.05, '#FFB27F')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.9;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
