import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18px;

  > input {
    width: 36%;
    height: 36px;
    padding: 9px;
    color: #453423;
    border: 2px solid #eead58;
    border-radius: 9px;
    margin-right: 9px;
  }
`;

export const Auth = styled.a`
  background: #eead58;
  height: 36px;
  width: 36px;
  color: #453423;
  border: 2px solid #eead58;
  border-radius: 9px;
  margin-right: 9px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#8A785B')};
    border: 2px solid ${darken(0.03, '#eead58')};
  }
`;
