import { navigate } from '@src/1_app/navigations/RootNavigation';
import { deleteParam, selectParams } from '@src/5_entities/shop/shop.slice';
import {
  FilterItem,
  FilterKey,
  FilterName,
} from '@src/5_entities/shop/shop.types';
import {
  CloseIcon,
  FilterIcon,
  Notification,
} from '@src/6_shared/assets/icons';
import { GAP } from '@src/6_shared/consts/dimentsions';
import { routes } from '@src/6_shared/consts/routes';
import { colors } from '@src/6_shared/lib/theme';
import { AppText } from '@src/6_shared/ui/AppText';
import { IButton } from '@src/6_shared/ui/IButton';
import { Row } from '@src/6_shared/ui/Row/Row';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { BackButton } from '../BackButton';
import { Search } from './search/Search';
import { useAppDispatch } from '@src/1_app/hooks';

export const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.interface,
    borderRadius: 15,
    flexDirection: 'row',
  },
  items: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
});

interface FilterHeaderProps {
  openned?: boolean;
}

const Item = ({ item, name }: { item: FilterKey; name: FilterName }) => {
  const dispatch = useAppDispatch();

  function onPress() {
    dispatch(deleteParam({ name, item }));
  }
  return (
    <View style={styles.item}>
      <AppText h5>{item}</AppText>
      <TouchableOpacity onPress={onPress}>
        <CloseIcon style={{ marginLeft: 5 }} />
      </TouchableOpacity>
    </View>
  );
};

export function FilterHeader({ openned = false }: FilterHeaderProps) {
  const params = useSelector(selectParams);

  const selectedParams = [FilterItem.Location, FilterItem.Food].map(name => {
    const { [name]: items } = params;
    return items?.map((item, index) => (
      <Item key={`item-${index}`} item={item} name={name} />
    ));
  });

  return (
    <>
      <Row>
        <BackButton />
        <AppText h1 bold>{`Find Your \nFavorite Food`}</AppText>
        <IButton icon={Notification} onPress={() => {}} />
      </Row>
      <Row gap={9}>
        <Search />
        {!openned && (
          <IButton
            icon={FilterIcon}
            onPress={() => navigate(routes.shop.Filter)}
          />
        )}
      </Row>
      {!openned && <View style={styles.items}>{selectedParams}</View>}
    </>
  );
}
