import { FilterHeader } from '@src/4_features/FilterHeader';
import { Filter } from '@src/5_entities/shop/shop.types';
import { AppText } from '@src/6_shared/ui/AppText';
import { Box } from '@src/6_shared/ui/Box';
import React, { Fragment } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { selectFilters } from '@src/5_entities/shop/shop.slice';
import { GAP } from '@src/6_shared/consts/dimentsions';
import { log } from '@src/6_shared/lib/debug/log';
import { useSelector } from 'react-redux';
import { styles } from './FilterScreenStyle';

const Items = ({ items }: { items: string[] }) =>
  items.map((item, index) => (
    <TouchableOpacity key={`item-${index}`} style={styles.item}>
      <AppText h5 grey>
        {item}
      </AppText>
    </TouchableOpacity>
  ));

const Filters = ({ filters }: { filters: Filter[] }) =>
  filters.map((filter, index) => {
    const { name, by } = filter;
    return (
      <Fragment key={`item-${index}`}>
        <AppText h4 bold>
          {name}
        </AppText>
        <View style={styles.items}>
          <Items items={by} />
        </View>
      </Fragment>
    );
  });

export const FilterScreen = () => {
  const filters = useSelector(selectFilters);
  log('FilterScreen', filters);

  return (
    <Box>
      <FilterHeader />
      <Filters filters={filters} />
    </Box>
  );
};
