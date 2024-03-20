import { View, Text,StatusBar,Button } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

export default function index() {
  const navigation =useNavigation()
 const handlenav =()=>{
  navigation.navigate('Animation')
 }
  return (
    <View  className=' flex items-center justify-center  bg-red-500 h-full w-full ' >
      <StatusBar hidden/>
    <Button onPress={handlenav} title='Paras'/>
    </View>
  )
}