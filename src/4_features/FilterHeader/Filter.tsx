import { FilterIcon, SearchIcon } from '@src/6_shared/assets/icons';
import { colors } from '@src/6_shared/lib/theme';
import { IButton } from '@src/6_shared/ui/IButton';
import { useMemo, useRef, useState } from 'react';
import { TextInput, View } from 'react-native';
import { styles as s } from './FilterInputStyle';
import { useAppDispatch } from '@src/1_app/hooks';
import {
  fetchMenus,
  fetchRestaurants,
  search,
} from '@src/5_entities/shop/shop.services';
import { logline } from '@src/6_shared/lib/debug/log';
import { controller } from '@src/6_shared/lib/api/_fetch';

const debounce = (func: (wants: string) => void, delay: number) => {
  //let timeoutId // After show an error
  let timeoutId: NodeJS.Timeout;

  return (wants: string) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, [wants]);
    }, delay);
  };
};

const useDebounce = (callback: (wants: string) => void) => {
  const ref = useRef(callback);
  ref.current = callback;

  const debouncedCallback = useMemo(() => {
    const func = (watns: string) => {
      ref.current?.(watns);
    };

    return debounce(func, 1000);
  }, []);

  return debouncedCallback;
};

// May be todo it without Control, and don't set left icon to Input?
//https://www.developerway.com/posts/debouncing-in-react
export function Filter() {
  const dispatch = useAppDispatch();
  //const wants = useSelector(selectWants);

  const [isShown, setIsShown] = useState(true);
  const [value, setValue] = useState('');

  const searchByPhrase = (wants: string) => dispatch(search(wants));
  const debouncedSearch = useDebounce(searchByPhrase);

  const onChangeText = (text: string) => {
    setValue(text);
    if (text) {
      debouncedSearch(text);
    }
    if (!text) {
      logline('FilterHeader', 'aborted');
      controller.abort();
      dispatch(fetchRestaurants());
      dispatch(fetchMenus());
    } // show all records
  }; // GOOD Example !

  const wrapper = {
    ...s.wrapper,
    ...(isShown && s.liconwrapper),
  };
  const LeftIcon = () => isShown && <SearchIcon style={s.licon} />;

  return (
    <>
      <View style={wrapper}>
        <LeftIcon />
        <TextInput
          style={s.input}
          value={value}
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
      <IButton icon={FilterIcon} onPress={() => {}} />
    </>
  );
}
