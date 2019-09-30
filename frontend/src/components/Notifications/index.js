import React, { useState } from 'react';

import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread>
        <MdNotifications color="#e27f46" size={20} />
      </Badge>
      <NotificationList visible={visible}>
        <Scroll>
          <Notification unread>
            <p>New tranfer to your account</p>
            <time>2 days ago</time>
            <button type="button">read</button>
          </Notification>
          <Notification>
            <p>New tranfer to your account</p>
            <time>2 days ago</time>
            <button type="button">read</button>
          </Notification>
          <Notification>
            <p>New tranfer to your account</p>
            <time>2 days ago</time>
            <button type="button">read</button>
          </Notification>
          <Notification>
            <p>New tranfer to your account</p>
            <time>2 days ago</time>
            <button type="button">read</button>
          </Notification>
          <Notification>
            <p>New tranfer to your account</p>
            <time>2 days ago</time>
            <button type="button">read</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
