import { View, Text, Image } from 'react-native'
import React from 'react'
import Logo from '../../assets/svg/app-logo-big.svg';

const CommonHeader = () => {
    return (
        <View className='bg-blue-500 w-full' >
            <View className='self-center '>
                <Logo width={150} height={100} />
            </View>
        </View>
    )
}

export default CommonHeader;