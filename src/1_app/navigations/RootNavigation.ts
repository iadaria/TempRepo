import {
  createNavigationContainerRef,
  ParamListBase,
} from '@react-navigation/native';
import { logline } from '@src/6_shared/lib/debug/log';

export const navigationRef = createNavigationContainerRef<any>();

export function navigate(screen: string, params?: object) {
  //export function navigate(...args: [screen: string] | [screen: string, params: any]) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(screen, params);
  }
}

export function navReset(screen: string) {
  logline('navigate to', { screen });
  if (navigationRef.isReady()) {
    navigationRef.reset({ index: 0, routes: [{ name: screen }] });
  }
}
