import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';

import React, { useState, useEffect  } from 'react';

function goToSignUpPage(navigation){
	console.log("GO TO SIGN UP");
	context.goToPage("signUp",navigation);
}

function goToLoginPage(navigation){
	console.log("GO TO LOG IN");
	context.goToPage("login",navigation);
}

let context = null;

const SignOrLogIn = ({navigation, route}) => {
	const [orgMsg, setOrgMsg] = useState("Loading ...");
	
	context = route.params.context
	
	useEffect(() => {
		//load org message from the server here
		//GET to /message
		let orgmsg = "loading ...";
		fetch(context.getURL()+"/message").then(responce =>{
			responce.text().then(msg => {
				setOrgMsg(msg);
			});
			
		}).catch(err =>{
			setOrgMsg("Communication Error");
		});
		
		//check if the user has a currently valid token for this domain
		if(context.getToken() != ""){
			//GET to /user
			fetch(context.getURL()+"/user", {
				headers: {
					'Authorization': context.getToken()
				}
			}).then(usrResponce =>{
				if(usrResponce.status <290){
				//if status 200
				//got to scan
				context.goToPage("scan",navigation);
				}else{
				//if status 401 then continue to this page
				//do nothing
				}
			}).catch(err =>{
				//do nothing
			});
		}
	},[]);
	
	return (
		<ScrollView
        contentInsetAdjustmentBehavior="automatic">
			<Text style={styles.title}>
				SIGN UP {'\n'} OR {'\n'} LOG IN
			</Text>
			<Text> {'\n'} </Text>
			<Text style={styles.orgMsgStyle}> {orgMsg} </Text>
			<Text> {'\n'} </Text>
			<View style = {styles.buttonBox}>
				<Button title="Log In" onPress = {()=>{goToLoginPage(navigation)}} />
				<Text>{'\n'}</Text>
				<Button title="Sign Up" onPress = {()=>{goToSignUpPage(navigation)}}/>
				<Text>{'\n'}</Text>
				<Button title="back" onPress = {()=>{context.goToPage("domainList",navigation);}}/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
  mainBox: {
    fontWeight: '700',
  },
  title: {
	fontSize: 30,
	textAlign: "center"
  },
  orgMsgStyle: {
	textAlign: "center"  
  },
  buttonBox: {
	  padding: "1%"

  }
});


export default SignOrLogIn;