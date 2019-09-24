import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #453423;
`;

export const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
  background: #eead58;
  padding: 50px 0px 9px 50px;
  border-top-left-radius: 9px;
  border-bottom: 1px solid #8a785b;

  p {
    margin-top: 3px;
    font-size: 25px;
  }
`;

export const Balance = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 400px;
  padding: 0px 0px 9px 50px;
  background: #eead58;
  border-bottom: 1px solid #8a785b;
`;

export const Current = styled.div`
  margin: 0px 75px 0px 0px;

  > h5 {
    margin-top: 18px;
  }

  > p {
    margin-top: 9px;
    font-size: 25px;
  }
`;

export const Limit = styled.div`
  > h5 {
    margin-top: 18px;
  }

  > p {
    margin-top: 9px;
    font-size: 25px;
  }
`;

export const Account = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
  background: #eead58;
  padding: 21px 0px 9px 50px;
  border-bottom-right-radius: 9px;
`;

export const Number = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 9px 0px 27px 0px;

  p {
    font-size: 20px;
    margin-right: 9px;
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  padding-top: 21px;
`;

export const Transfer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #453423;
  background: #eead58;
  padding: 21px;
  width: 185px;
  border-top-left-radius: 9px;
  border-bottom-right-radius: 9px;

  &:hover {
    background: ${darken(0.03, '#6B5941')};
    color: #eead58;
    cursor: pointer;
  }

  svg {
    font-size: 80px;
  }
  strong {
    margin-top: 9px;
    font-size: 14px;
  }
`;
export const History = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #453423;
  background: #eead58;
  padding: 21px;
  width: 185px;
  border-top-left-radius: 9px;
  border-bottom-right-radius: 9px;

  &:hover {
    background: ${darken(0.03, '#6B5941')};
    color: #eead58;
    cursor: pointer;
  }

  svg {
    font-size: 80px;
  }
  strong {
    margin-top: 9px;
    font-size: 14px;
  }
`;
