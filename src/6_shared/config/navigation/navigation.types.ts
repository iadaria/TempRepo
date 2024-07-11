import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type NavigationProp = NativeStackNavigationProp<ParamListBase>;

export interface NavigationProps {
  navigation: NativeStackNavigationProp<ParamListBase>;
}
