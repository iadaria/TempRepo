import { View, Text, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
} from './CounterSlice';

export function Counter() {
  const [incrementAmount, setIncrementAmount] = useState('2');

  const count = useAppSelector(selectCount);
  const status = useAppSelector(state => state.counter.status);

  const dispatch = useAppDispatch();

  const number = Number(incrementAmount) || 0;

  return (
    <View>
      <Pressable onPress={() => dispatch(increment())}>
        <Text style={{ fontSize: 30 }}>+</Text>
      </Pressable>
      <Text style={{ fontSize: 30 }}>{count}</Text>
      <Pressable onPress={() => dispatch(decrement())}>
        <Text style={{ fontSize: 30 }}>-</Text>
      </Pressable>

      <TextInput
        value={incrementAmount}
        keyboardType="numeric"
        onChangeText={setIncrementAmount}
      />

      <Pressable onPress={() => dispatch(incrementByAmount(number))}>
        <Text style={{ fontSize: 30 }}>Add Amount</Text>
      </Pressable>

      <Pressable
        disabled={status != 'idle'}
        onPress={() => {
          console.log('Async clicked');
          dispatch(incrementAsync(number));
        }}>
        <Text style={{ fontSize: 30 }}>Add Async</Text>
      </Pressable>
    </View>
  );
}
