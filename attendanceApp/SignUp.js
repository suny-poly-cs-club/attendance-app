import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
  //This would be how to create an alert to let the user know sign up fails or is successful
	//or notify of other things depending on your needs
    Alert.alert('Sign Up', `Username: ${username}\nPassword: ${password}`);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>SIGN UP</Text>
      <Text style={{ marginBottom: 0 }}>Please sign up below using</Text>
      <Text style={{ marginBottom: 20 }}>your organization specific email</Text>
      {/*The line below can be commented back in to connect this message to the backend*/}
		  {/*<Text style={{ marginBottom: 20 }}>TEXT POPULATED BY BACKEND</Text> */}
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
        onPress={handleSignUp} // Call the handleSignUp function on button press
      >
        <Text style={{ color: 'white' }}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
