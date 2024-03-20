import { View, Text,StatusBar ,TextInput} from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Signup() {
    const [text, setText] = useState('');

    const handleChangeText = (inputText) => {
      setText(inputText);
    };
  
    // const handleSubmit = () => {
    //   // Do something with the text, such as submitting it to a server or performing validation
    //   console.log('Submitted text:', text);
    // };
  return (
    <View className='flex items-center justify-center'>
        <View className='bg-white flex flex-col items-start justify-start h-full w-full p-6 gap-7 pt-16  '>
        <StatusBar hidden/>
      <Text className='text-red-500 text-3xl  font-extrabold'>Register</Text>
      <View className='flex flex-col items-center justify-center  '>
       <View className='flex flex-row items-center justify-center gap-5 ' >
         <View className='flex flex-col items-start justify-start   '>
            <Text className='font-semibold'>FIRST NAME:</Text>
            <View className='' style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput className='rounded-3xl bg-slate-100 w-32  '
        style={{  height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10, textAlign: 'left' }}
        onChangeText={handleChangeText}
        value={text}
        placeholder="Sam"
      />
    </View>
         </View>
         <View className=''>
            <Text className='font-semibold'>LAST NAME:</Text>
            <View className='' style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput className='rounded-3xl bg-slate-100 w-32  '
        style={{  height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10, textAlign: 'left' }}
        onChangeText={handleChangeText}
        value={text}
        placeholder="Altman"
      />
    </View>
         </View>
       </View>
      </View>
      <View className='flex flex-col items-start justify-start'>
        <Text className='font-semibold'>COUNTRY:</Text>
        <View className='' style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput className='rounded-3xl bg-slate-100 w-72  '
        style={{  height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10, textAlign: 'left' }}
        onChangeText={handleChangeText}
        value={text}
        placeholder="Country"
      />
    </View>
       </View>
       <View className='flex flex-col items-start justify-start'>
        <Text className='font-semibold'>EMAIL:</Text>
        
      <View className='' style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput className='rounded-3xl bg-slate-100 w-72  '
        style={{  height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10, textAlign: 'left' }}
        onChangeText={handleChangeText}
        value={text}
        placeholder="VishuKarad@gmail.com"
      />
    </View>
       </View>
       <View className='flex flex-col items-start justify-start'>
        <Text className='font-semibold'>MOBILE:</Text>
        <View className='' style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput className='rounded-3xl bg-slate-100 w-72  '
        style={{  height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10, textAlign: 'left' }}
        onChangeText={handleChangeText}
        value={text}
        placeholder="9192"
      />
    </View>
       </View>
       <View className='flex flex-col items-start justify-start'>
        <Text className='font-semibold'>PASSWORD:</Text>
        <View className='' style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TextInput className='rounded-3xl bg-slate-100 w-72  '
        style={{  height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10, textAlign: 'left' }}
        onChangeText={handleChangeText}
        value={text}
        placeholder="******"
      />
    </View>
       </View>
       <TouchableOpacity className='bg-red-500 rounded-3xl p-2 ' >
        <Text className='text-white text-xl px-24'>Register</Text>
       </TouchableOpacity>
    </View>
       <Text className=''>Already have an account ?  Log in </Text>
    </View>
  )
}