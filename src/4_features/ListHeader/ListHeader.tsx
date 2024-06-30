import { AppText } from '@src/6_shared/ui/AppText';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './ListHeaderStyle';

interface ListHeaderProps {
  title: string;
  link: string;
  onPress: () => void;
}

export const ListHeader = ({ title, link, onPress }: ListHeaderProps) => (
  <View style={styles.wrapperHeader}>
    <AppText h3 bold>
      {title}
    </AppText>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.headerLink}>{link}</Text>
    </TouchableOpacity>
  </View>
);
