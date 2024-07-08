import { navigationRef } from '@src/1_app/navigations/RootNavigation';
import { BackIcon } from '@src/6_shared/assets/icons';
import { IButton } from '@src/6_shared/ui/IButton';
import React from 'react';

export const BackButton = () => {
  if (!navigationRef.isReady || !navigationRef.current?.canGoBack()) {
    return null;
  }
  return <IButton icon={BackIcon} onPress={() => navigationRef?.goBack()} />;
};
