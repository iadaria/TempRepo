export async function fetchCount(): Promise<{ count: number }> {
  const response = await fetch('/count');
  return response.json();
}
