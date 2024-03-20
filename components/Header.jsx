import { View, Text,Image,StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'


export default function Header() {
const navigation =useNavigation()
  return (
    <View className='flex flex-row items-center justify-center  ' >
    <View className='bg-red-500  w-96 flex flex-row items-start justify-start  '>
    <Image  source={require('../assets/images/logo.png')} className='h-6 w-6  ' />
    <Text className='pt-2 text-white text-xl  font-semibold p-2 '>RESQ 1</Text>
    {/* <Image  source={require('../assets/images/home.png')} className='h-6 w-6' /> */}
    </View>
    </View>
    
  )
}