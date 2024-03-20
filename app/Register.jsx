import { View, Text,StatusBar,Image,TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'

export default function Register() {
  const navigation = useNavigation()
  const handleregister =()=>{
    navigation.navigate('Signup')
  }
  const handlelogin =()=>{
    navigation.navigate('Login')
  }

  return (
    <ImageBackground className='' source={require('../assets/images/maps.jpg')}>

    <View className=' bg-red-500 opacity-90  pt-40 flex flex-col items-center justify-start h-full w-full  '>
      <StatusBar hidden/>
      <Image source={require('../assets/images/logo.png')} className='h-40 w-40' />
      <View className='pt-12 gap-5' >
        <TouchableOpacity onPress={handleregister} className='  bg-white border-2 border-white rounded-3xl px-24 py-2 ' >
<Text className='text-red-500 text-xl font-semibold text-center ' >Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlelogin} className='  bg-white border-2 border-white rounded-3xl px-24 py-2 ' >
<Text className='text-red-500 text-xl font-semibold text-center ' >Log in</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
      <Text className='text-white  pt-12 ' >In an emergency ?</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>

  )
}