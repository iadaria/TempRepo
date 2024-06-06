import { LoginDto } from '@src/features/auth/authSlice';
import { Control, FieldError, useController } from 'react-hook-form';
import { styles as s } from './InputStyle';
import { Text, TextInput } from 'react-native';
import { colors } from '@src/shared/lib/theme';

interface InputProps {
  placeholder?: string;
  name: keyof LoginDto; // the same type as "email" | "password"
  control: Control<LoginDto>;
  error?: FieldError;
}

export const Input = ({ placeholder, name, control, error }: InputProps) => {
  const { field } = useController({
    control,
    name,
  });

  console.log({ error });

  const style = {
    ...s.input,
    ...(error && s.errorInput),
  };

  return (
    <>
      <TextInput
        style={style}
        value={field.value}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
      />
      {error && <Text style={s.error}>{error?.message}</Text>}
    </>
  );
};
