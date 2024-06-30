import {
  View,
  Text,
  FlatList,
  Touchable,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { ListHeader } from '../ListHeader/ListHeader';
import { Menu } from '@src/5_entities/shop/shop.types';
import { AppText } from '@src/6_shared/ui/AppText';
import { styles } from './MenuListStyle';

interface MenuListProps {
  menus: Menu[];
  horizontal?: boolean;
}

export const MenuList = ({ menus }: MenuListProps) => {
  const renderItem = ({ item }: { item: Menu }) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Image style={styles.image} source={{ uri: item.uri }} />
        <AppText medium>{item.name}</AppText>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <ListHeader title="Popular menu" link="View More" onPress={() => {}} />
      <FlatList
        data={menus}
        keyExtractor={(_, index) => `item-${index}`}
        renderItem={renderItem}
      />
    </>
  );
};
