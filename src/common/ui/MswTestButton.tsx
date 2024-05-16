import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { fetchUser } from '../../mock/test';

export function MswTestButton() {
  async function fetchAndShowUser() {
    const user = await fetchUser();
    console.info('', { user });
  }
  return (
    <Pressable onPress={fetchAndShowUser}>
      <Text>MsvTestButton</Text>
    </Pressable>
  );
}
