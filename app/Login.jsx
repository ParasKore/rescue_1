import { View, Text ,TextInput} from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from 'expo-router';

export default function Login() {
    const [text, setText] = useState('');
    

    const handleChangeText = (inputText) => {
      setText(inputText);

    };
    const naviagtion = useNavigation()
    const handlelogin =()=>{
        naviagtion.navigate('HomeScreen')
    }
  
  return (
    <View className='flex items-center justify-center'>
      <View className='bg-white flex flex-col items-start justify-start h-full w-full p-6 gap-4 pt-16 ' >
        <Text className='text-red-500 text-3xl  font-extrabold'>Login</Text>
      <View className='flex flex-col items-start justify-start  '>
<Text className='font-semibold'>YOUR EMAIL:</Text>
<View className='pt-2' style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput className='rounded-3xl bg-slate-100 w-72 px-10 border-none  '
        style={{  height: 40, borderWidth: 1, paddingHorizontal: 10, textAlign: 'left' }}
        onChangeText={handleChangeText}
        value={text}
        placeholder="Altman"
      />
    </View>
      </View>
      <View className=' flex flex-col items-start justify-start  '>
<Text className='font-semibold'>PASSWORD:</Text>
<View className='pt-2' style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput className='rounded-3xl bg-slate-100 w-72 px-10  '
        style={{  height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10, textAlign: 'left' }}
        onChangeText={handleChangeText}
        value={text}
        placeholder="********"
      />
    </View>
      </View>
      <View className='pt-5 flex flex-col items-center justify-center '>
      <TouchableOpacity  onPress={handlelogin}  style={{height:40}} className='w-72 bg-red-500 rounded-3xl   '>
        <Text className='text-center text-white text-xl font-semibold py-1 '>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity  style={{height:40}} className=' pt-2 '>
        <Text className='text-center text-red-500 text-lg  py-1 '>Forgot Password ? </Text>
      </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}