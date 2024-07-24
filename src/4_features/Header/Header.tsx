import { Notification } from '@src/6_shared/assets/icons';
import { AppText } from '@src/6_shared/ui/AppText';
import { IButton } from '@src/6_shared/ui/IButton';
import { Row } from '@src/6_shared/ui/Row/Row';
import React from 'react';
import { BackButton } from '../BackButton';
import { View } from 'react-native';

interface HeaderProps {
  text?: string;
  subtitle?: string;
  notification?: boolean;
  children?: React.ReactNode;
}

export const Header = ({
  text,
  subtitle,
  notification = true,
  children,
}: HeaderProps) => {
  const h1 = Boolean(text) && (
    <AppText h1 bold>
      {text}
    </AppText>
  );
  const h2 = Boolean(subtitle) && (
    <AppText h2 bold>
      {subtitle}
    </AppText>
  );

  return (
    <>
      <Row>
        <BackButton />
        {h1}
        <Row gap={10} style={{ justifyContent: 'flex-end' }}>
          {children}
          {notification && <IButton icon={Notification} onPress={() => {}} />}
        </Row>
      </Row>
      <Row>{h2}</Row>
    </>
  );
};
