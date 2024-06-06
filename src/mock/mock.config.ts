export async function enableMocking() {
  if (__DEV__) {
    await import('./msw.config');
    const { server } = await import('./server');
    server.listen({ onUnhandledRequest: 'bypass' });
  }
}
