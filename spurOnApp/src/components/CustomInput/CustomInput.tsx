import React, { FC } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Keyboard
} from 'react-native';

type CustomInputProps = {
  placeholder: string
  value: string,
  setValue: (value: string) => void;
  secureTextEntry?: boolean
}

const CustomInput: FC<CustomInputProps> = ({
  placeholder,
  value,
  setValue,
  secureTextEntry
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
        blurOnSubmit={false}
        onSubmitEditing={()=> Keyboard.dismiss()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 10
  },
  input: {
    marginVertical: 10,
    paddingHorizontal: 10,
  }
})

export default CustomInput
