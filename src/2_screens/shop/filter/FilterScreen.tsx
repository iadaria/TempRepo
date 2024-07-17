import { AppText } from '@src/6_shared/ui/AppText';
import { Box } from '@src/6_shared/ui/Box';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useAppDispatch } from '@src/1_app/hooks';
import { useFocus } from '@src/1_app/navigations/model/lib/hooks/useFocus';
import { FilterHeader } from '@src/4_features/FilterHeader';
import { focusFilterScreen, search } from '@src/5_entities/shop/shop.services';
import {
  addParam,
  deleteParam,
  selectFilters,
  selectParams,
  setParam,
} from '@src/5_entities/shop/shop.slice';
import { useSelector } from 'react-redux';
import { styles } from './FilterScreenStyle';
import { Button } from '@src/6_shared/ui/Button';

interface ItemProps {
  item: string;
  selected: boolean;
  name: string;
}

const Item = ({ item, name }: { item: string; name: string }) => {
  const dispatch = useAppDispatch();
  const params = useSelector(selectParams);

  const checkedParams = params[name] || [];
  const isSelected = checkedParams.includes(item);

  function onPress() {
    if (isSelected) dispatch(deleteParam({ name, item }));
    if (!isSelected) dispatch(addParam({ name, item }));

    //dispatch(setParam({ name, item, toDelete: isSelected }));
  }

  const style = {
    ...styles.item,
    ...(isSelected && styles.selected),
  };

  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <AppText h5>{item}</AppText>
    </TouchableOpacity>
  );
};

const FilterItems = ({ filter }: { filter: [string, string[]] }) => {
  const [name, by] = filter;

  const items = by.map((item, index) => {
    return <Item key={`item-${index}`} item={item} name={name} />;
  });

  return (
    <>
      <AppText h4 bold>
        {name}
      </AppText>
      <View style={styles.items}>{items}</View>
    </>
  );
};

export const FilterScreen = () => {
  const dispatch = useAppDispatch();
  const filters = useSelector(selectFilters);

  useFocus(focusFilterScreen);

  const filterItems = Object.entries(filters).map((filter, index) => (
    <FilterItems key={`key-${index}`} filter={filter} />
  ));

  function onSearch() {
    dispatch(search());
  }

  return (
    <Box scroll>
      <FilterHeader />
      {filterItems}

      <Button onPress={onSearch} secondary>
        <AppText>Search</AppText>
      </Button>
    </Box>
  );
};
