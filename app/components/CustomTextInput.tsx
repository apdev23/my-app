import React from 'react';
import { TextInput, StyleSheet, StyleProp, TextStyle, KeyboardTypeOptions } from 'react-native';

type TextInputProps = {
    onBlur: () => void;
    onChangeText: (text: string) => void;
    inputStyle?: StyleProp<TextStyle>;
    value?: string;
    placeholder?: string;
    keyboardType?: KeyboardTypeOptions;
    secureTextEntry?: boolean;
    autoCapitalize: string;
};

const CustomTextInput: React.FC<TextInputProps> = ({
    onBlur,
    onChangeText,
    inputStyle,
    value,
    placeholder,
    keyboardType = 'default',
    secureTextEntry = false,
    autoCapitalize = undefined
}) => {
    return (
        <TextInput
            style={[inputStyle]}
            onBlur={onBlur}
            onChangeText={onChangeText}
            value={value}
            placeholder={placeholder}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            placeholderTextColor="gray"
            className='bg-white rounded px-5 py-5'
            autoCapitalize={autoCapitalize}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        color: '#000000',
    },
});

export default CustomTextInput;
