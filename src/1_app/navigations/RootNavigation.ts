import {
  createNavigationContainerRef,
  ParamListBase,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<any>();

export function navigate(screen: string, params?: object) {
  //export function navigate(...args: [screen: string] | [screen: string, params: any]) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(screen, params);
  }
}
