import CommonHeader from "@/app/components/CommonHeader";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Pressable, ScrollView } from "react-native";
import PlusIcon from '../../../assets/svg/plus.svg';
import PlusActiveIcon from '../../../assets/svg/plus-active.svg';
import { Link, useRouter } from "expo-router";

const TapToPayComplete = () => {
    const router = useRouter();

    const amount = "100.00"
    return (
        <View className="flex-1 bg-white items-center">

            <View className="w-full">
                <CommonHeader />
            </View>
            <ScrollView>
                <View className="w-96 px-5 mt-10">
                    <Text className="text-blue-800 font-bold text-2xl">
                        Payment Complete
                    </Text>
                    <Text className="text-blue-800 font-semibold pt-9 text-6xl">
                        £{amount}
                    </Text>

                    <Text className="text-blue-900 text-lg mt-4">
                        4 April 2024 - 13:55
                    </Text>
                    <Text className="text-blue-900 text-lg mt-2">
                        Description on Payment item
                    </Text>
                    <Link href={'/screen/home/TapToPay'} asChild>
                        <Pressable>
                            <Text className="text-blue-800 mt-3 font-bold text-1xl">
                                Contractor account
                            </Text>
                        </Pressable>
                    </Link>
                </View>
            </ScrollView>
            <TouchableOpacity
                onPress={() => router.push('/screen/home/Dashboard')}
                className='bg-green-200 w-80 rounded-full py-6 mt-9 mb-10'>
                <Text className='text-blue-950 text-center font-bold uppercase text-1xl'>go back</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TapToPayComplete;
