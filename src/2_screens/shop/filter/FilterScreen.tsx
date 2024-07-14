import { FilterHeader } from '@src/4_features/FilterHeader';
import { Filter } from '@src/5_entities/shop/shop.types';
import { AppText } from '@src/6_shared/ui/AppText';
import { Box } from '@src/6_shared/ui/Box';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useAppDispatch } from '@src/1_app/hooks';
import { useFocus } from '@src/1_app/navigations/model/lib/hooks/useFocus';
import { focusFilterScreen } from '@src/5_entities/shop/shop.services';
import { selectFilters } from '@src/5_entities/shop/shop.slice';
import { log } from '@src/6_shared/lib/debug/log';
import { useSelector } from 'react-redux';
import { styles } from './FilterScreenStyle';

const Item = ({ item, selected }: { item: string; selected: boolean }) => {
  const style = {
    ...styles.item,
    ...(selected && styles.selected),
  };
  return (
    <TouchableOpacity style={style}>
      <AppText h5 grey>
        {item}
      </AppText>
    </TouchableOpacity>
  );
};

const FilterItems = ({ filter }: { filter: Filter }) => {
  const { name, by } = filter;
  const Items = () => {
    return by.map((item, index) => {
      return <Item key={`item-${index}`} {...item} />;
    });
  };

  return (
    <>
      <AppText h4 bold>
        {name}
      </AppText>
      <View style={styles.items}>
        <Items />
      </View>
    </>
  );
};

const Filters = () => {
  const dispatch = useAppDispatch();
  const filters = useSelector(selectFilters);

  //log('FiltersScreen', { params });
  log('FilterScreen', { filters });

  //return null;
  return filters.map((filter, index) => (
    <FilterItems key={`key-${index}`} filter={filter} />
  ));
};

export const FilterScreen = () => {
  useFocus(focusFilterScreen);
  return (
    <Box>
      <FilterHeader />
      <Filters />
    </Box>
  );
};
