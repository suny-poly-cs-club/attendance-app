import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

import Context from './context.js'

const ScreenList = ({navigation}) => {
	
	const [context,setContext]= useState(new Context());//dont set the context
	
	useEffect(() => {
		navigation.addListener('focus', () => {
			console.log(context);
			//code here runs every time this screen is made the active screen
			//check context Domain
			//navigte to the requested page
			//if unknown go to domain list
			/*
			let page = context.getCurrentPage();
			switch(page){
				
				case "enterDomain":
					navigation.navigate('Enter_domain',{"context": context})
					break;
				case "signOrLogin":
					navigation.navigate('Sign_or_log_in',{"context": context})
					break;
				case "signUp":
					navigation.navigate('Sign_up',{"context": context})
					break;
				case "login":
					navigation.navigate('Log_in',{"context": context})
					break;
				case "scan":
					navigation.navigate('Scan',{"context": context})
					break;
				default:
					navigation.navigate('Domain_list',{"context": context})
					break;
			}*/

		});
		
	},[navigation,context]);
	return (
		<View>
			<Text>
				Go to Screen:
			</Text>
			<Button title="Domain List" onPress={()=>{
				navigation.navigate('Domain_list',{"context": context})
				}}/>
			<Text />
			<Button title="Enter Domain" onPress={()=>{
				navigation.navigate('Enter_domain',{"context": context})
				}}/>
			<Text />
			<Button title="Sign or Log in" onPress={()=>{
				navigation.navigate('Sign_or_log_in',{"context": context})
				}}/>
			<Text />
			<Button title="Sign up" onPress={()=>{
				navigation.navigate('Sign_up',{"context": context})
				}}/>
			<Text />
			<Button title="Log in" onPress={()=>{
				navigation.navigate('Log_in',{"context": context})
				}}/>
			<Text />
			<Button title="Scan" onPress={()=>{
				navigation.navigate('Scan',{"context": context})
				}}/>
		</View>
	);
};

export default ScreenList;