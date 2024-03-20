import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Footer() {
  return (
      <TouchableOpacity className='bg-red-500 h-12 w-96 flex flex-row items-center justify-center    '>
    {/* <Image  source={require('../assets/images/home.png')} className='h-6 w-6 ' /> */}
    <Text className='text-white text-center  text-xl font-semibold  '>SOS</Text>
    </TouchableOpacity>
  )
}