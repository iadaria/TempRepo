import { Filter, Notification, Search } from '@src/6_shared/assets/icons';
import { AppText } from '@src/6_shared/ui/AppText';
import { IButton } from '@src/6_shared/ui/IButton';
import { Input } from '@src/6_shared/ui/Input';
import { Row } from '@src/6_shared/ui/Row/Row';
import React from 'react';
import { useForm } from 'react-hook-form';

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
        <AppText h1 bold>{`Find Your \nFavorite Food`}</AppText>
        <IButton icon={Notification} />
      </Row>
      <Row gap={9}>
        <Input
          name="search"
          control={control}
          placeholder="What do you want to order?"
          licon={Search}
        />
        <IButton icon={Filter} />
      </Row>
    </>
  );
}
