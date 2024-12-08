import CommonHeader from "@/app/components/CommonHeader";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import PlusIcon from '../../../assets/svg/plus.svg';
import PlusActiveIcon from '../../../assets/svg/plus-active.svg';
import { Link } from "expo-router";

const Dashboard = () => {
    const [tap, setTap] = useState(false);
    return (
        <View className="flex-1 bg-white items-center">

            <View className="w-full">
                <CommonHeader />
            </View>

            <View className="w-96 px-5">
                <Link href={'/screen/home/TapToPayComplete'} onPress={() => setTap(true)} asChild>
                    <Pressable
                        className={`bg-white py-5 justify-between active:bg-green-200 pe-3 ps-7 border-hairline border-gray-200 rounded-lg shadow-md mt-5 max-w-sm flex-row ${tap ? 'bg-green-200' : 'bg-white'
                            }`}
                        onPress={() => setTap(true)}
                    >
                        <View className="">
                            <Text className="text-blue-800 font-bold text-2xl">
                                Tap to Pay Payment
                            </Text>
                            <Text className="text-blue-900 font-bold text-base">Send a payment to this device.</Text>
                        </View>
                        <View className="justify-center">
                            {tap == true ? <PlusActiveIcon width={40} height={40} /> : <PlusIcon width={40} height={40} />}
                        </View>
                    </Pressable>
                </Link>

            </View>

            <View className="mt-8 w-96 px-5">
                <Text className="text-blue-800 font-bold text-2xl">
                    Looking for something?
                </Text>
                <Text className="text-blue-900 text-sm mt-2">
                    SplitSum's full features are not yet available in the app. Visit the
                    website to use other features of the platform.
                </Text>
            </View>
        </View>
    );
};

export default Dashboard;
