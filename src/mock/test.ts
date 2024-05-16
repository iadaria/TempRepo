export async function fetchUser() {
  const response = await fetch('https://example.com/user');
  return response.json();
}
