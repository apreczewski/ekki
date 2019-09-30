import styled, { css } from 'styled-components';
import perfectScrollBar from 'react-perfect-scrollbar';
import { lighten } from 'polished';
// import { darken } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;

  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #41c36d;
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: calc(50% - 155px);
  top: calc(100% + 25px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 9px;
  padding: 15px 5px;

  display: ${props => (props.visible ? 'block' : 'none')};
`;

export const Scroll = styled(perfectScrollBar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 12px;
    line-height: 18px;
  }

  time {
    font-size: 11px;
    opacity: 0.6;
  }

  button {
    font-size: 11px;
    border: 0;
    background: none;
    color: ${lighten(0.2, '#e27f46')};
    padding: 0 5px;
    margin: 0 5px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #41c36d;
        border-radius: 50%;
      }
    `}
`;
