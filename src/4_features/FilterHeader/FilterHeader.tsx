import { useAppDispatch } from '@src/1_app/hooks';
import { navigate } from '@src/1_app/navigations/RootNavigation';
import { search } from '@src/5_entities/shop/shop.services';
import { deleteParam, selectParams } from '@src/5_entities/shop/shop.slice';
import {
  FilterItem,
  FilterKey,
  FilterName,
} from '@src/5_entities/shop/shop.types';
import { CloseIcon, FilterIcon } from '@src/6_shared/assets/icons';
import { routes } from '@src/6_shared/consts/routes';
import { AppText } from '@src/6_shared/ui/AppText';
import { IButton } from '@src/6_shared/ui/IButton';
import { Row } from '@src/6_shared/ui/Row/Row';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Header } from '../Header';
import { styles } from './FilterHeaderStyle';
import { Search } from './search/Search';

const Item = ({ item, name }: { item: FilterKey; name: FilterName }) => {
  const dispatch = useAppDispatch();

  function onPress() {
    dispatch(deleteParam({ name, item }));
    dispatch(search());
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

interface FilterHeaderProps {
  openned?: boolean;
  text: string;
}

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
      <Header text={`Find Your \nFavorite Food`} />
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
