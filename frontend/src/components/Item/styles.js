import styled from 'styled-components';
import { darken } from 'polished';

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  height: 90px;
  padding: 9px 55px 9px 55px;
  color: #453423;
  background: #eead58;
  border-radius: 9px;
  margin-top: 20px;

  &:hover {
    background: ${darken(0.03, '#8A785B')};
    border: 2px solid ${darken(0.03, '#eead58')};
    cursor: pointer;
  }

  > strong {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background: #cf8736;
    padding: 9px;
    border-radius: 50%;
    font-size: 25px;
  }
`;

export const InfoAccount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  strong {
    margin-top: 3px;
    font-size: 12px;
  }

  span {
    margin-top: 3px;
    font-size: 16px;
  }
`;
export const Favorite = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    border: 1px solid #fff;
    background: #d4efeee9;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    padding: 9px;
  }

  > strong {
    margin-top: 3px;
    font-size: 10px;
  }
`;
