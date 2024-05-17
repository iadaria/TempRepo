export async function enableMocking() {
  if (__DEV__) {
    await import('./msw.config');
    const { server } = await import('@/mock/server');
    server.listen();
  }
}

export async function enableReactotron() {
  if (!__DEV__) {
    await import('@/shared/config/reactotron.config');
  }
}
