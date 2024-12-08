import CommonHeader from "@/app/components/CommonHeader";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Dashboard = () => {

    console.log("dashboard");

    return (
        <View className="flex-1 bg-white items-center">
            {/* Header */}
            <View className="w-full">
                <CommonHeader />
            </View>

            {/* Button */}
            <TouchableOpacity
                className="bg-white py-5 border-hairline border-gray-200 rounded-lg shadow-md w-full mt-5 max-w-sm flex-row"
                onPress={() => alert("Tap to Pay Button Pressed!")}
            >
                <View>
                    <Text className="text-blue-800 font-bold text-2xl">
                        Tap to Pay Payment
                    </Text>
                    <Text className="text-gray-500 text-sm">Send a payment to this device.</Text>
                </View>
            </TouchableOpacity>

            {/* Footer Text */}
            <View className="mt-8 items-center">
                <Text className="text-gray-800 font-semibold text-lg">
                    Looking for something?
                </Text>
                <Text className="text-gray-500 text-center mt-2 px-4">
                    SplitSum's full features are not yet available in the app. Visit the
                    website to use other features of the platform.
                </Text>
            </View>
        </View>
    );
};

export default Dashboard;
