import CommonHeader from "@/app/components/CommonHeader";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Pressable, TextInput } from "react-native";
import PlusIcon from '../../../assets/svg/plus.svg';
import PlusActiveIcon from '../../../assets/svg/plus-active.svg';
import { Link, useRouter } from "expo-router";

const TapToPay = () => {
    const router = useRouter();

    const [amount, setAmount] = useState('0');
    // const amount = "100.00"
    return (
        <View className="flex-1 bg-white items-center">

            <View className="w-full">
                <CommonHeader />
            </View>

            <View className="w-96 px-5 mt-10">
                <Text className="text-blue-800 text-center font-bold text-2xl">
                    Add Tap to Pay Payment
                </Text>
                <Text className='text-blue-800 text-xl font-bold text-center mt-5 mb-3'>Amount <Text className='text-red-600 text-1xl'>*</Text></Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View className="items-center justify-center">
                        <Text className="text-blue-800 font-medium text-lg">
                            £
                        </Text>
                    </View>
                    {/* <View className="justify-center items-center"> */}
                    <TextInput
                        className="text-blue-900 text-8xl w-auto text-center"
                        value={amount}
                        onChangeText={(text) => setAmount(text)}
                        keyboardType="phone-pad"
                    />
                    {/* </View> */}
                </View>
                <TouchableOpacity
                    onPress={() => ''}
                    className='bg-green-200 w-80 rounded-full py-6 mt-9 mb-10'>
                    <Text className='text-blue-950 text-center font-bold uppercase text-1xl'>send payment</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TapToPay;
