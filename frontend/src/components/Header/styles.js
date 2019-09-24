import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  background: #cf8736;

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
    font-size: 15px;
    color: #54422f;
    h4 {
      padding-left: 10px;
    }
  }
`;

export const UserAuth = styled(Link)``;
