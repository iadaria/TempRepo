import { Filter, Notification, Search } from '@src/6_shared/assets/icons';
import { AppText } from '@src/6_shared/ui/AppText';
import { IButton } from '@src/6_shared/ui/IButton';
import { Input } from '@src/6_shared/ui/Input';
import { Row } from '@src/6_shared/ui/Row/Row';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BackButton } from '../BackButton';

import { searchRestaurants } from '@src/5_entities/shop/shop.services';
import { useAppDispatch } from '@src/1_app/hooks';

// May be todo it without Control, and don't set left icon to Input?
const debounce = (func: (wants: string) => string, delay: number) => {
  //let timeoutId // After show an error
  let timeoutId: NodeJS.Timeout;

  return (wants: string) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, [wants]);
    }, delay);
  };
};

type FilterDto = {
  search?: string;
};

export function FilterHeader() {
  const dispatch = useAppDispatch();
  const {
    control,
    formState: {},
    watch,
  } = useForm<FilterDto>();

  const search = (wants: string) => dispatch(searchRestaurants(wants));
  const debouncedSearch = debounce(search, 1000);

  return (
    <>
      <Row>
        <BackButton />
        <AppText h1 bold>{`Find Your \nFavorite Food`}</AppText>
        <IButton icon={Notification} onPress={() => {}} />
      </Row>
      <Row gap={9}>
        <Input
          name="search"
          control={control}
          placeholder="What do you want to order?"
          licon={Search}
          //onChange={search} // 1 See request in Reactotron
          // 1 add log into request.ts for counting how much requests were sent
          onChange={debouncedSearch} // GOOD Example !
        />
        <IButton icon={Filter} onPress={() => {}} />
      </Row>
    </>
  );
}
