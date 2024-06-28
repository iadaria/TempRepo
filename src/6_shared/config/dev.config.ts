// Wrong can't use it in low level

export async function enableReactotron() {
  if (__DEV__) {
    await import('./reactotron.config');
  }
}
