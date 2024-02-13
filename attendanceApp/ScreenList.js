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
				}}/>
			<Text />
			<Button title="Enter Domain" onPress={()=>{
				navigation.navigate('Enter_domain')
				}}/>
			<Text />
			<Button title="Sign or Log in" onPress={()=>{
				navigation.navigate('Sign_or_log_in')
				}}/>
			<Text />
			<Button title="Sign up" onPress={()=>{
				navigation.navigate('Sign_up')
				}}/>
			<Text />
			<Button title="Log in" onPress={()=>{
				navigation.navigate('Log_in')
				}}/>
			<Text />
			<Button title="Scan" onPress={()=>{
				navigation.navigate('Scan')
				}}/>
		</View>
	);
};

export default ScreenList;