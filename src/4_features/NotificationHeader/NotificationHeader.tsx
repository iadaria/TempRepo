import { Notification } from '@src/6_shared/assets/icons';
import { Badge } from '@src/6_shared/ui/Badge';
import { Button } from '@src/6_shared/ui/Button';
import React from 'react';
import { styles } from './NotificationHeaderStyle';
import { useSelector } from 'react-redux';
import { selectNotifyAmount } from '@src/5_entities/notification/notify.slice';

export function NotificationHeader() {
  const amount = useSelector(selectNotifyAmount);
  return (
    <Button style={styles.badge}>
      <Badge amount={amount} icon={Notification} />
    </Button>
  );
}
