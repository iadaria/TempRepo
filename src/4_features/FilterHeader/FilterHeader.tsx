import { navigate, navigationRef } from '@src/1_app/navigations/RootNavigation';
import { FilterIcon, Notification } from '@src/6_shared/assets/icons';
import { routes } from '@src/6_shared/consts/routes';
import { AppText } from '@src/6_shared/ui/AppText';
import { IButton } from '@src/6_shared/ui/IButton';
import { Row } from '@src/6_shared/ui/Row/Row';
import React from 'react';
import { BackButton } from '../BackButton';
import { Search } from './search/Search';

export function FilterHeader() {
  const route = navigationRef?.getCurrentRoute();
  const isFilterScreen = Boolean(route) && route?.name === routes.shop.Filter;

  return (
    <>
      <Row>
        <BackButton />
        <AppText h1 bold>{`Find Your \nFavorite Food`}</AppText>
        <IButton icon={Notification} onPress={() => {}} />
      </Row>
      <Row gap={9}>
        <Search />
        {!isFilterScreen && (
          <IButton
            icon={FilterIcon}
            onPress={() => navigate(routes.shop.Filter)}
          />
        )}
      </Row>
    </>
  );
}
