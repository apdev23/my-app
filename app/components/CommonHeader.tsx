import { View, Text, Image } from 'react-native'
import React from 'react'

const CommonHeader = () => {
    return (
        <View className='bg-blue-500' >
            <Image
                source={require('../../assets/images/icon.png')}
                resizeMode="contain"
                className='mt-10 mb-7'
                style={{ width: 90, height: 90, alignSelf: 'center' }}
            />
        </View>
    )
}

export default CommonHeader;