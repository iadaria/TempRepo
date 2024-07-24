import { useAppDispatch } from '@src/1_app/hooks';
import { cartAdd } from '@src/5_entities/cart/cart.services';
import { selectStatus } from '@src/5_entities/cart/cart.slice';
import { CartItem } from '@src/5_entities/cart/cart.types';
import { MinusIcon, PlusIcon } from '@src/6_shared/assets/icons';
import { AppText } from '@src/6_shared/ui/AppText';
import { Button } from '@src/6_shared/ui/Button';
import { IButton } from '@src/6_shared/ui/IButton';
import { Row } from '@src/6_shared/ui/Row/Row';
import React from 'react';
import { useSelector } from 'react-redux';
import { styles } from './OrderGUIStyle';

export const OrderGUI: React.FC<{ menu: CartItem }> = ({ menu }) => {
  const dispatch = useAppDispatch();

  const status = useSelector(selectStatus);

  const increment = () => dispatch(cartAdd({ id: menu.id, digit: 1 }));
  const decrement = () => dispatch(cartAdd({ id: menu.id, digit: -1 }));
  const disabled = status == 'loading';

  const plusAndMinus = (
    <Row style={styles.menu}>
      <IButton disabled={disabled} icon={MinusIcon} onPress={decrement} />
      <AppText>{menu.quantity}</AppText>
      <IButton
        disabled={disabled}
        icon={PlusIcon}
        onPress={increment}
        secondary
      />
    </Row>
  );
  const add = (
    <Button style={styles.add} onPress={increment} secondary>
      <AppText>Add</AppText>
    </Button>
  );

  return menu.quantity > 0 ? plusAndMinus : add;
};
