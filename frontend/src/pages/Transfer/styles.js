import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > strong {
    align-self: center;
    margin-top: 36px;
    font-size: 26px;
    color: #e27f46;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
  margin-top: 30px;

  input {
    width: 100%;
    max-width: 310px;
    background: rgba(0, 0, 0, 0.3);
    border: 0;
    border-radius: 9px;
    height: 36px;
    padding: 0 15px;
    color: #fff;
    margin-right: 15px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  button {
    width: 100%;
    max-width: 50px;
    margin: 5px 0 0;
    height: 36px;
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
`;

export const ListFavorite = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #274f58;
  border-radius: 9px;
  padding: 15px 5px;
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 400px;
  padding: 5px 15px;
`;

export const Favorite = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  padding: 35px;
  color: #e27f46;
  font-weight: bold;

  & + div {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  &:hover {
    background: ${darken(0.05, '#568990')};
    cursor: pointer;
  }

  > strong {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 35px;
    background: #3b6770;
    font-size: 18px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export const InfoAccount = styled.div`
  padding: 0 15px 0 15px;

  div {
    margin-top: 10px;

    > span {
      margin-right: 10px;
    }
  }
`;
