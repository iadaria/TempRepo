import { useAppDispatch } from '@src/1_app/hooks';
import { search } from '@src/5_entities/shop/shop.services';
import { selectWants, want } from '@src/5_entities/shop/shop.slice';
import { SearchIcon } from '@src/6_shared/assets/icons';
import { colors } from '@src/6_shared/lib/theme';
import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useDebounce } from '../lib/hooks/useDebounce';
import { styles } from './SearchStyle';

export const Search = () => {
  const dispatch = useAppDispatch();
  const wants = useSelector(selectWants);

  const [isShown, setIsShown] = useState(true);

  //const searchByPhrase = (wants: string) => dispatch(search());
  const searchByPhrase = () => dispatch(search());
  const debouncedSearch = useDebounce(searchByPhrase);

  const onChangeText = (text: string) => {
    dispatch(want(text));
    debouncedSearch();

    // if (!text) {
    //   logline('FilterHeader', 'aborted');
    //   controller.abort();
    // } // show all records
  }; // GOOD Example !

  const wrapper = {
    ...styles.wrapper,
    ...(isShown && styles.liconwrapper),
  };
  const LeftIcon = () => isShown && <SearchIcon style={styles.licon} />;

  return (
    <View style={wrapper}>
      <LeftIcon />
      <TextInput
        style={styles.input}
        value={wants}
        onFocus={() => {
          setIsShown(false);
        }}
        onChangeText={onChangeText}
        onBlur={() => {
          setIsShown(true);
        }}
        placeholder="What do you want to order?"
        placeholderTextColor={colors.placeholder}
      />
    </View>
  );
};
