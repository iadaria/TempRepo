import { colors } from '@src/6_shared/lib/theme';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import {
  Control,
  FieldError,
  FieldValues,
  Path,
  useController,
} from 'react-hook-form';
import { Text, TextInput, View, ViewProps } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { styles as s } from './InputStyle';
//import { LoginDto } from '@src/features/auth/auth.types';

interface InputProps<T extends FieldValues> {
  placeholder?: string;
  name: Path<T>; // the same type as "email" | "password"
  control: Control<T>;
  licon?: React.FC<SvgProps>;
  error?: FieldError;
  onChange?: (text: string) => void;
}

export function Input<T extends FieldValues>({
  placeholder,
  name,
  control,
  error,
  licon,
  onChange,
}: InputProps<T>) {
  const { field } = useController({
    control,
    name,
  });

  //const leftIcon = useRef<InputIconDOM>();
  const [isShown, setIsShown] = useState(Boolean(licon));

  const wrapper = {
    ...s.wrapper,
    ...(error && s.errorInput),
    ...(isShown && s.liconwrapper),
  };

  const LeftIcon = () => licon && isShown && licon({ style: s.licon });

  return (
    <View style={wrapper}>
      <LeftIcon />
      <TextInput
        style={s.input}
        value={field.value}
        onFocus={() => {
          setIsShown(false);
        }}
        onChangeText={(text: string) => {
          field.onChange(text);
          if (onChange) onChange(text);
        }}
        onBlur={() => {
          field.onBlur();
          setIsShown(Boolean(licon));
        }}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
      />
      {error && <Text style={s.error}>{error?.message}</Text>}
    </View>
  );
}

/* 
interface InputIconProps extends ViewProps {
  icon?: React.FC<SvgProps>;
}

interface InputIconDOM {
  show: () => void;
  hide: () => void;
}

const InputIcon = forwardRef(({ icon: Icon, style }: InputIconProps, ref) => {
  console.log('InputIcon', { isShown });

  useImperativeHandle(
    ref,
    () => ({
      hide: () => setIsShown(false),
      show: () => setIsShown(true),
    }),
    [],
  );

  if (!Icon || !isShown) {
    return false;
  }

  return <Icon style={style} />;
});
 */
