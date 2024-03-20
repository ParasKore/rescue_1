import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

export default function Sos() {
    const navigation = useNavigation()
    const handlechange = ()=>{
        navigation.navigate('Agencies')
    }
  return (
    <View>
      <View onPress={handlechange} className='bg-red-500 h-10  w-full '>
       <Text className='text-white text-center text-xl font-semibold py-1 '>SOS</Text>
    </View>
    </View>
  )
}