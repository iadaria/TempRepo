import { Filter, Notification, Search } from '@src/6_shared/assets/icons';
import { AppText } from '@src/6_shared/ui/AppText';
import { IButton } from '@src/6_shared/ui/IButton';
import { Input } from '@src/6_shared/ui/Input';
import { Row } from '@src/6_shared/ui/Row/Row';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BackButton } from '../BackButton';
import { logline } from '@src/6_shared/lib/debug/log';
import { styles } from './FilterheaderStyle';

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
  const {
    control,
    formState: {},
  } = useForm<FilterDto>();

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
          //onChange={()}
        />
        <IButton icon={Filter} onPress={() => {}} />
      </Row>
    </>
  );
}
