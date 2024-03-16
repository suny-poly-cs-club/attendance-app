import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

const SignUp = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [orgMsg, setOrgMsg] = useState('');

  const handleSignUp = () => {
    // Enforce criteria
    if (password.length < 5) {
      Alert.alert('Password Error', 'Password must be at least 5 characters long');
      return;
    }
	
	if(password != confirmPassword){
		Alert.alert('Password Error', "Passwords do not match!");
		return;
	}

    if (email.length > 255) {
      Alert.alert('Email Error', 'Email must be at most 255 characters long');
      return;
    }

    if (firstName.length > 80) {
      Alert.alert('First Name Error', 'First Name must be at most 80 characters long');
      return;
    }

    if (lastName.length > 80) {
      Alert.alert('Last Name Error', 'Last Name must be at most 80 characters long');
      return;
    }

    // This would be how to create an alert to let the user know sign up fails or is successful
    // or notify of other things depending on your needs
    Alert.alert('Sign Up', `Email: ${email}\nPassword: ${password}\nFirst Name: ${firstName}\nLast Name: ${lastName}`);
  };
  
  useEffect(() => {
		//load org msg from the server here
		let orgMsg = "TMP MSG"
		setOrgMsg(orgMsg);
		
	},[]);

  return (
    <ScrollView
        contentInsetAdjustmentBehavior="automatic">
	 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>SIGN UP</Text>
      <Text style={{ marginBottom: 20 }}>Use a unique password</Text>
      {/*The line below can be commented back in to connect this message to the backend*/}
      <Text style={{ marginBottom: 20 }}>{orgMsg}</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 15, width: 250 }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 15, width: 250 }}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
	  <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 15, width: 250 }}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 15, width: 250 }}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 15, width: 250 }}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TouchableOpacity
        style={{ backgroundColor: 'blue', padding: 10 }}
        onPress={handleSignUp} // Call the handleSignUp function on button press
      >
        <Text style={{ color: 'white' }}>Sign Up</Text>
      </TouchableOpacity>
	 </View>
    </ScrollView>
  );
};

export default SignUp;
