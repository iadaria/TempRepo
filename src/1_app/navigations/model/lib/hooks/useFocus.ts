import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '@src/1_app/hooks';
import { NavigationProp } from '@src/6_shared/config/navigation/navigation.types';
import { useEffect } from 'react';

export const useFocus = (func: () => void) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch<any>(func());
    });
    return unsubscribe;
  }, [navigation]);
};
