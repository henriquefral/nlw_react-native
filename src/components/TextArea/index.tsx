import React from 'react';
import { View, Text, TextInputProps } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from './styles';
 
export function TextArea({...rest}: TextInputProps) {
    return (
        <TextInput
            style={styles.container}
            {...rest}
        />
    );
 
}