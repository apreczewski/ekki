import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: #453423;
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  padding-top: 21px;
`;

export const Transfer = styled(Link)`
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
