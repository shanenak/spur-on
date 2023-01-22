import React, {FC} from 'react';
import {View, StyleSheet, TextInput, Text, Keyboard} from 'react-native';
import {Controller} from 'react-hook-form';

type CustomInputProps = {
  placeholder: string;
  secureTextEntry?: boolean;
  control: any;
  name: string;
  rules: any;
};

const CustomInput: FC<CustomInputProps> = ({
  placeholder,
  secureTextEntry,
  control,
  name,
  rules = {},
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : '#e8e8e8'},
            ]}>
            <TextInput
              value={value}
              style={styles.input}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              blurOnSubmit={false}
              onSubmitEditing={() => Keyboard.dismiss()}
            />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf: 'stretch'}}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default CustomInput;
