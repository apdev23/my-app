import { View, Text, ImageBackground, Image, TouchableOpacity, Pressable, KeyboardAvoidingView, ScrollView, ActivityIndicator } from 'react-native';
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
    password: yup
        .string()
        .required('Password is Required')
        .min(6, 'Password must be at least 6 characters long')
});

const SignIn = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { control, handleSubmit, reset, formState: { errors }, trigger } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: any) => {
        setLoading(true);
        try {
            const response = await axios.post('https://uat.splitsum.co/api/login', data);
            setLoading(false);
            Toast.show({
                type: 'success',
                text1: 'Login Successful',
                text2: `Welcome back, ${response?.data?.user?.name}!`
            });
            router.push('/screen/home/Dashboard')
        } catch (error) {
            setLoading(false);
            Toast.show({
                type: 'error',
                text1: 'Login Failed',
                text2: error.response?.data?.message || 'Something went wrong. Please try again.'
            });
        }
    };

    return (
        <ImageBackground style={{ flex: 1 }} source={require('../../../assets/images/bg.jpg')}>
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView style={{ flex: 1 }}>
                    <ScrollView style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}>
                            <View className='self-center'>
                                <Logo width={300} height={120} />
                            </View>                            
                            {(errors.email || errors.password) &&
                                <View className='bg-red-400 rounded mx-9 px-5 py-5 mt-5'>
                                    {errors?.email && (<Text className='text-white'>{errors?.email?.message}</Text>)}
                                    {errors?.password && (<Text className='text-white'>{errors?.password?.message}</Text>)}
                                </View>}
                            <View className='mx-9 mt-4'>
                                <Text className='text-white text-xl text-center mt-5 mb-3'>Email Address <Text className='text-red-600 text-1xl'>*</Text></Text>
                                <Controller control={control}
                                    name='email'
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <CustomTextInput
                                            placeholder='email@address.com'
                                            onBlur={() => {
                                                onBlur();
                                                trigger('email');
                                            }}
                                            onChangeText={(text) => {
                                                onChange(text);
                                                trigger('email');
                                            }}
                                            value={value}
                                            keyboardType='email-address'
                                            autoCapitalize='none'
                                            inputStyle={{ borderColor: errors?.email && 'red', borderWidth: errors?.email && 1 }}
                                        />
                                    )}
                                />
                                <Text className='text-white text-xl text-center mt-5 mb-3'>Password <Text className='text-red-600 text-1xl'>*</Text></Text>
                                <Controller control={control}
                                    name='password'
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <CustomTextInput
                                            placeholder='Password'
                                            onBlur={() => {
                                                onBlur();
                                                trigger('password');
                                            }}
                                            onChangeText={(text) => {
                                                onChange(text);
                                                trigger('password');
                                            }}
                                            value={value}
                                            secureTextEntry={true}
                                            inputStyle={{ borderColor: errors?.password && 'red', borderWidth: errors?.password && 1 }}
                                        />
                                    )}
                                />
                                <TouchableOpacity disabled={loading}
                                    // onPress={handleSubmit(onSubmit)} 
                                    onPress={() => router.push('/screen/home/Dashboard')}

                                    className='bg-green-200 rounded-full py-6 mt-9'>
                                    {loading ? (
                                        <ActivityIndicator size={'small'} color="#0000ff" />
                                    ) : (
                                        <Text className='text-blue-950 text-center font-bold uppercase text-1xl'>sign in</Text>
                                    )}
                                </TouchableOpacity>
                                <Link href={'/screen/auth/ForgotPassword'} asChild>
                                    <Pressable>
                                        <Text className='text-white opacity-80 text-lg underline text-center pt-4'>Forgot your Password?</Text>
                                    </Pressable>
                                </Link>
                            </View>
                            <View style={{ height: 1 }} className='bg-blue-900 opacity-30 mt-9'></View>
                            <View className='mx-9'>
                                <Text className='text-white text-xl font-bold pt-4'>Looking to sign up?</Text>
                                <Text className='text-white text-base font-normal mt-3'>SplitSum's full features are not yet available in the app. Visit the website to sign up for an account.</Text>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>

                <Toast />
                <StatusBar style="auto" />
            </SafeAreaView>
        </ImageBackground>
    );
};

export default SignIn;
