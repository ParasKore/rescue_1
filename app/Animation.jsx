import { View, Text,StatusBar,Image } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

export default function Animation() {
    const navigation =useNavigation()
    setTimeout(()=>{
  navigation.navigate('Register')
    },2000)
    return (
      <View  className=' flex items-center justify-center  bg-red-500 h-full w-full ' >
        <StatusBar hidden/>
        <Image source={require('../assets/images/logo.png')} className='h-52 w-52' />
      </View>
    )
}