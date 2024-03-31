import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

let context = null;

const LogIn = ({ navigation, route }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [orgMsg, setOrgMsg] = useState('');
  
  context = route.params.context

  const handleGoBack = () => {
    navigation.goBack();
  };

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
  try {
    const response = await fetch('https://example.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username, // Assuming email is the user's email address
        password
      })
    });

    if (response.ok) {
      const data = await response.json(); // Parse response body as JSON
      const authToken = data.token; // Assuming the server returns the authentication token as 'token'
      
      // Set the context token
      context.setToken(authToken);

      // Navigate to the 'scan' screen
      navigation.navigate('Scan');
    } else {
      Alert.alert('Error', 'Incorrect username or password. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    Alert.alert('Error', 'An error occurred. Please try again later.');
  }
};

//load org msg from the server here
//GET to /message
useEffect(() => {
  // Load org msg from the server
  const fetchOrgMessage = async () => {
    try {
      const response = await fetch('https://example.com/message');
      if (response.ok) {
        const data = await response.json();
        setOrgMsg(data.message); // Assuming the message is provided in the 'message' field of the response JSON
      } else {
        // Handle error response
        console.error('Error fetching org message:', response.status);
      }
    } catch (error) {
      console.error('Error fetching org message:', error);
    }
  };

  fetchOrgMessage();
}, []);

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
        <TouchableOpacity
          style={{ backgroundColor: 'gray', padding: 10, marginTop: 15}}
          onPress={handleGoBack}
        >
          <Text style={{ color: 'white' }}>Back</Text>
        </TouchableOpacity>
      </View>
	  </ScrollView>
  );
};

export default LogIn;
