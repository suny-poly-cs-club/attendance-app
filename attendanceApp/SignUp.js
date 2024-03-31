import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

let context = null;

const SignUp = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [orgMsg, setOrgMsg] = useState('');
  
  context = route.params.context

  const handleGoBack = () => {
    navigation.goBack();
  };

  //ask the back end to create the user
	//POST to /sign-up {firstName, lastName, email, password}
	//if not success try to read and display the error message
	//if success
	//set context token
	//go to scan
	
  const handleSignUp = async () => {
    try {
      // Enforce criteria
      if (password.length < 5) {
        Alert.alert('Password Error', 'Password must be at least 5 characters long');
        return;
      }
  
      if (password !== confirmPassword) {
        Alert.alert('Password Error', 'Passwords do not match!');
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
  
      const response = await fetch('https://example.com/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password
        })
      });
  
      if (response.ok) {
        // Sign-up successful
        const data = await response.text();
        const authToken = data.token; // Assuming the server returns the authentication token as 'token'
  
        // Set the context token
        context.setToken(authToken);
  
        // Navigate to the 'Scan' screen
        context.goToPage("Scan",navigation);
      } else {
        // Sign-up failed, display error message
        const errorData = await response.text();
        Alert.alert('Sign Up Error', errorData.message);
      }
    } catch (error) {
      console.error('Error signing up:', error);
      Alert.alert('Sign Up Error', 'An error occurred while signing up. Please try again later.');
    }
    // This would be how to create an alert to let the user know sign up fails or is successful
    // or notify of other things depending on your needs
    Alert.alert('Sign Up', `Email: ${email}\nPassword: ${password}\nFirst Name: ${firstName}\nLast Name: ${lastName}`);
};
  
//Below is the logic to load an organizational message from the server
  useEffect(() => {
    // Load org message from the server
    const fetchOrgMessage = async () => {
      try {
        const response = await fetch('https://example.com/message');
        if (response.ok) {
          const data = await response.text();
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
      <Text style={{ fontSize: 20, marginBottom: 10 }}>SIGN UP</Text>
      <Text style={{ marginBottom: 20 }}>Use a unique password</Text>
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
        style={{ backgroundColor: 'blue', padding: 10, marginBottom: 15 }}
        onPress={handleSignUp}
      >
        <Text style={{ color: 'white' }}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ backgroundColor: 'gray', padding: 10 }}
        onPress={handleGoBack}
      >
        <Text style={{ color: 'white' }}>Back</Text>
      </TouchableOpacity>
	   </View>
    </ScrollView>
  );
};

export default SignUp;
