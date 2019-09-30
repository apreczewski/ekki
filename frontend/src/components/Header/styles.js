import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  padding: 0 18px;
  background: #193f48;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;

  nav {
    display: flex;
    align-items: center;

    svg {
      font-size: 35px;
      color: #e27f46;
    }

    a {
      margin-left: 20px;
      padding-left: 20px;
      border-left: 1px solid #e27f46;
      text-decoration: none;
      font-size: 15px;
      color: #e27f46;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const UserAuth = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #e27f46;

  button {
    background: none;
    border: none;
    color: #e27f46;

    svg {
      font-size: 22px;

      &:hover {
        color: #ea3430;
      }
    }
  }
`;
