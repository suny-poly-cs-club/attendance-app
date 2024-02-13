/**ONLY EDIT ON main BRANCH
*/
import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

const ScreenList = ({navigation}) => {
	
	return (
		<View>
			<Text>
				Go to Screen:
			</Text>
			<Button title="Domain List" onPress={()=>{
				navigation.navigate('Domain_list')
				console.log("press")
				}}/>
			<Text />
			<Button title="Enter Domain" onPress={()=>{
				navigation.navigate('Enter_domain')
				console.log("press")
				}}/>
			<Text />
			<Button title="Sign or Log in" onPress={()=>{
				console.log("press")
				navigation.navigate('Sign_or_log_in')
				}}/>
			<Text />
			<Button title="Sign up" onPress={()=>{
				console.log("press")
				navigation.navigate('Sign_up')
				}}/>
			<Text />
			<Button title="Log in" onPress={()=>{
				navigation.navigate('Log_in')
				console.log("press")
				}}/>
			<Text />
			<Button title="Scan" onPress={()=>{
				navigation.navigate('Scan')
				console.log("press")
				}}/>
		</View>
	);
};

export default ScreenList;