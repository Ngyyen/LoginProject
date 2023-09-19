import React, { useState } from "react";
import {Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {LemonHeader, UnicornFooter, WelcomeScreen} from '../components/LemonHeader';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Input = (props) => {
  const [text, setText] = useState('');
  const changeTextFunc = (newText) => {
    setText(newText);
  }
  return (
    <TextInput
      style = {styles.textInput}
      onChangeText={changeTextFunc}
      value={text}
      placeholder={props.instruction}
    />
  )
}

const CheckBox = (props) => {
  const [isChecked, setIsCheck] = useState(false);

  return (
    <BouncyCheckbox
      style = {styles.checkBox}
      onPress={(isChecked) => {setIsCheck(!isChecked)}}
      text={props.text}
      textStyle={styles.checkText}
      innerIconStyle={{borderRadius: 7,}}
      iconStyle={{borderRadius: 7,}}
    />
  )
}

const App = () => {
  return (
    <ScrollView style = {styles.mainView}>
      <Image 
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={styles.mainImage}
      />
      <Text style = {styles.welcomeText}>CREATE YOUR ACCOUNT</Text>
      <View style = {{flex: 0.25, paddingBottom: 15}}>
        <Input instruction='Enter your name'/>
        <Input instruction='Email'/>
        <Input instruction='Password'/>
      </View>
      
      <CheckBox text = "Keep me sign in"/>
      <CheckBox text = "Email me about special price and more"/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1, 
    backgroundColor: '#FFF3E9',
  },
  mainImage: {    
    flex: 0.2,
    width: 187, 
    height: 200,
    alignSelf: 'center',
    paddingTop: 10,
    marginTop: 10,
  },
  welcomeText: {
    flex: 0.05,
    color: '#573353',
    fontFamily: 'Cherry Cream Soda',
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 15,
  },
  textInput: {
    //alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    height: 56,
    //width: 373,
    borderRadius: 15, 
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 25,
    // marginStart: 10,
    // marginEnd: 10,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  checkBox: {
    marginLeft: 30,
    marginRight:30,
    paddingVertical: 10,
  },
  checkText: {
    textDecorationLine: "none",
    color: '#573353',
    fontWeight: 'bold',
  },
})

export default App;