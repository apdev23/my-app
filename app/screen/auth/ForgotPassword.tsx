import { View, Text, ImageBackground, Image, TouchableOpacity, Pressable, KeyboardAvoidingView, ScrollView, Platform, ActivityIndicator } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTextInput from '@/app/components/CustomTextInput';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { Link, useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import Logo from '../../../assets/svg/app-logo-big.svg';

const schema = yup.object().shape({
    email: yup
        .string()
        .required('Email is Required')
        .email('Please enter a valid email'),
});

const ForgotPasswordScreen = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const { control, handleSubmit, formState: { errors }, trigger } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const response = await axios.post('https://uat.splitsum.co/api/forgot-password', data);
            setLoading(false);
            Toast.show({
                type: 'success',
                text1: 'Check your email',
                text2: 'Instructions have been sent to your email address.',
            });
            router.push('/screen/auth/SignIn');
        } catch (error) {
            setLoading(false);
            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: error.response?.data?.message || 'Something went wrong. Please try again.',
            });
        }
    };

    return (
        <ImageBackground className="flex-1" source={require('../../../assets/images/bg.jpg')}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView
                        style={{ flex: 1 }}
                        keyboardShouldPersistTaps="handled"
                    >
                        <View style={{ flex: 1 }}>
                            <View className='self-center mt-20 mb-5'>
                                <Logo width={300} height={120} />
                            </View>
                            <View className="mx-9">
                                <Text className="text-white text-2xl text-center font-bold pt-4">
                                    Forgot your password?
                                </Text>
                                <Text className="text-white text-center text-base font-normal mx-9 mt-3">
                                    You will be emailed instructions on how to reset your password.
                                </Text>
                            </View>

                            {errors.email && (
                                <View className="bg-red-400 rounded mx-9 px-5 py-5 mt-5">
                                    <Text className="text-white">{errors.email.message}</Text>
                                </View>
                            )}

                            <View className="mx-9">
                                <Text className="text-white text-xl text-center mt-5 mb-3">
                                    Email Address <Text className="text-red-600 text-1xl">*</Text>
                                </Text>
                                <Controller
                                    control={control}
                                    name="email"
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <CustomTextInput
                                            placeholder="email@address.com"
                                            onBlur={() => {
                                                onBlur();
                                                trigger('email');
                                            }}
                                            onChangeText={(text) => {
                                                onChange(text);
                                                trigger('email');
                                            }}
                                            value={value}
                                            keyboardType="email-address"
                                            autoCapitalize="none"
                                            inputStyle={{
                                                borderColor: errors?.email && 'red',
                                                borderWidth: errors?.email && 1,
                                            }}
                                        />
                                    )}
                                />

                                <TouchableOpacity
                                    onPress={handleSubmit(onSubmit)}
                                    disabled={loading}
                                    className="bg-green-200 rounded-full py-6 mt-9"
                                >
                                    {loading ? (
                                        <ActivityIndicator size="small" color="#0000ff" />
                                    ) : (
                                        <Text className="text-blue-950 text-center font-bold uppercase text-1xl">
                                            Submit
                                        </Text>
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </KeyboardAvoidingView>

            <Toast />
            <StatusBar style="light" />

        </ImageBackground>
    );
};

export default ForgotPasswordScreen;
