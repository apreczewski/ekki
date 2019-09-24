import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10% 0% 90% 0%;

  > form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 60%;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #453423;

      svg {
        font-size: 50px;
      }

      strong {
        margin-top: 3px;
        font-size: 18px;
      }
    }

    > input {
      width: 100%;
      height: 36px;
      padding: 9px;
      color: #453423;
      border: 2px solid #eead58;
      border-radius: 9px;
      margin-top: 9px;
    }

    > button {
      width: 100%;
      height: 36px;
      background: #eead58;
      color: #453423;
      border: 2px solid #eead58;
      border-radius: 9px;
      margin-top: 9px;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#8A785B')};
        border: 2px solid ${darken(0.03, '#eead58')};
      }
    }

    > a {
      width: 100%;
      height: 36px;
      background: #eead58;
      color: #453423;
      border: 2px solid #eead58;
      border-radius: 9px;
      margin-top: 9px;
      text-decoration: none;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#8A785B')};
        border: 2px solid ${darken(0.03, '#eead58')};
      }
    }
  }
`;
