import {
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';
import { useState } from 'react';

const LogIn = ({navigation}) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		<Text style={{ fontSize: 20, marginBottom: 10 }}>WELCOME</Text>
		<Text style={{ marginBottom: 0 }}>Please log in below using</Text>
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
			onPress={() => handleLogin(username, password)}
		  >
			<Text style={{ color: 'white' }}>Log In</Text>
		  </TouchableOpacity>
		</View>
	  );
	};
	

export default LogIn;