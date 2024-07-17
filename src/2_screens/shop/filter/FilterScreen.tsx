import { AppText } from '@src/6_shared/ui/AppText';
import { Box } from '@src/6_shared/ui/Box';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useAppDispatch } from '@src/1_app/hooks';
import { useFocus } from '@src/1_app/navigations/model/lib/hooks/useFocus';
import { navigate, navReset } from '@src/1_app/navigations/RootNavigation';
import { FilterHeader } from '@src/4_features/FilterHeader';
import { focusFilterScreen, search } from '@src/5_entities/shop/shop.services';
import {
  addParam,
  deleteParam,
  selectFilters,
  selectParams,
} from '@src/5_entities/shop/shop.slice';
import {
  FilterKey,
  FilterName,
  Filters,
  FilterType,
  ParamName,
} from '@src/5_entities/shop/shop.types';
import { routes } from '@src/6_shared/consts/routes';
import { Button } from '@src/6_shared/ui/Button';
import { useSelector } from 'react-redux';
import { styles } from './FilterScreenStyle';

const Item = ({ item, name }: { item: FilterKey; name: FilterName }) => {
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

const FilterItems = ({ filter }: { filter: [FilterKey, Filters] }) => {
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
  const params = useSelector(selectParams);

  useFocus(focusFilterScreen);

  const filterItems = Object.entries(filters).map((filter, index) => (
    <FilterItems key={`key-${index}`} filter={filter} />
  ));

  function onSearch() {
    dispatch(search());

    const type = params?.type;
    const selected = type?.length;
    // try without reset and you see back button in Header
    if ([undefined, 2].includes(selected)) navReset(routes.shop.Home);
    // TODO Refactoring
    /* else {
      const route = `${type![0]}s`;
      navigate
    } */
    if (type![0] === FilterType.Menu) {
      navigate(routes.shop.Menus);
    }
    if (type![0] === FilterType.Restaurant) {
      navigate(routes.shop.Restorants);
    }
  }

  return (
    <Box scroll>
      <FilterHeader openned={true} />
      {filterItems}

      <Button onPress={onSearch} secondary>
        <AppText>Search</AppText>
      </Button>
    </Box>
  );
};
