import { View, Text } from 'react-native';
import React from 'react';
import { Row } from '@src/6_shared/ui/Row/Row';
import { BackButton } from '../BackButton';
import { AppText } from '@src/6_shared/ui/AppText';
import { IButton } from '@src/6_shared/ui/IButton';
import { Notification } from '@src/6_shared/assets/icons';

interface HeaderProps {
  text: string;
}

export const Header = ({ text }: HeaderProps) => {
  return (
    <Row>
      <BackButton />
      <AppText h1 bold>
        {text}
      </AppText>
      <IButton icon={Notification} onPress={() => {}} />
    </Row>
  );
};
