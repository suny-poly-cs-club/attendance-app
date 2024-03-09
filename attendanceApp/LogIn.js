import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

const LogIn = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogIn = async () => {
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
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>LOG IN</Text>
      <Text style={{ marginBottom: 0 }}>Please log in below using</Text>
      <Text style={{ marginBottom: 20 }}>your organization specific email</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 15, width: 250 }}
        placeholder="Username"
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
      <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 10 }}
        onPress={handleLogIn}
      >
        <Text style={{ color: 'white' }}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogIn;
