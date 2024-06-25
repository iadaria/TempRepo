import { Text, Pressable } from 'react-native';
import React from 'react';
import { fetchUser } from '../../../mock/test';

export function MswTestButton() {
  async function fetchAndShowUser() {
    const user = await fetchUser();
    console.info('', { user });
  }
  return (
    <Pressable
      onPress={fetchAndShowUser}
      style={{
        backgroundColor: 'green',
        padding: 10,
        alignSelf: 'center',
      }}>
      <Text style={{ fontSize: 20 }}>Msv Test Button</Text>
    </Pressable>
  );
}
