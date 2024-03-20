import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

let context = null;

const LogIn = ({ navigation, route }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [orgMsg, setOrgMsg] = useState('');
  
  context = route.params.context

  const handleLogIn = async () => {
    // Validate if username or password is blank
    if (!username || !password) {
      setErrorMessage('Username and password are required');
      // Clear error message after 5 seconds
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      return;
    }
	
	//POST to /login {email,password}
	//set the context token
	//goto scan
	
	
//Below is to handle back end 
/*
    try {
      const response = await fetch('https://example.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      });

      if (response.ok) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Incorrect username or password. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
    */
  };
  
  useEffect(() => {
	//load org msg from the server here
	//GET to /message
	let orgMsg = "TMP MSG"
	setOrgMsg(orgMsg);
  },[]);

  return (
	<ScrollView
        contentInsetAdjustmentBehavior="automatic">
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>LOG IN</Text>
        <Text style={{ marginBottom: 0 }}>Please log in below</Text>
	    <Text style={{ marginBottom: 20 }}>{orgMsg}</Text>
        <TextInput
          style={{ borderWidth: 1, padding: 10, marginBottom: 15, width: 250 }}
          placeholder="Email"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={{ borderWidth: 1, padding: 10, marginBottom: 15, width: 250 }}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true} 
        />
        {errorMessage ? (
          <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text>
        ) : null}
        <TouchableOpacity
          style={{ backgroundColor: 'blue', padding: 10 }}
          onPress={handleLogIn}
        >
          <Text style={{ color: 'white' }}>Log In</Text>
        </TouchableOpacity>
		{/*back button*/}
      </View>
	</ScrollView>
  );
};

export default LogIn;
