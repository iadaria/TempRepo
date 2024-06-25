import { API_BASE_URL } from '@env';

console.log('test.ts', { API_BASE_URL });

export async function fetchUser() {
  const response = await fetch(`${API_BASE_URL}/user`);
  return response.json();
}
