import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Box } from '@src/6_shared/ui/Box';
import { FilterHeader } from '@src/4_features/FilterHeader';
import { AppText } from '@src/6_shared/ui/AppText';
import { Filter, FilterType } from '@src/5_entities/shop/shop.types';

import { log, logline } from '@src/6_shared/lib/debug/log';
import { GAP } from '@src/6_shared/consts/dimentsions';
import { styles } from './FilterScreenStyle';
import { useSelector } from 'react-redux';
import { selectFilters } from '@src/5_entities/shop/shop.slice';

const Types = ({ types }: { types: string[] }) =>
  types.map((type, index) => (
    <TouchableOpacity key={`item-${index}`} style={styles.item}>
      <AppText h5 grey>
        {type}
      </AppText>
    </TouchableOpacity>
  ));

const FilterItems = ({ filter }: { filter: Filter }) => {};

export const FilterScreen = () => {
  const filters = useSelector(selectFilters);
  log('FilterScreen', filters);

  const types = Object.values(FilterType);

  return (
    <Box>
      <FilterHeader />

      {/*  <AppText h4 bold>
        Type
      </AppText>
      <View style={{ flexDirection: 'row', gap: GAP }}>
        <Types types={types} />
      </View>
      <AppText h4 bold>
        Location
      </AppText>
      <AppText h4 bold>
        Food
      </AppText> */}
    </Box>
  );
};
