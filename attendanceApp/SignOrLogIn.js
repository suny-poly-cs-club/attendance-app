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
}

function goToLoginPage(navigation){
	console.log("GO TO LOG IN");
}

let context = null;

const SignOrLogIn = ({navigation, route}) => {
	const [orgMsg, setOrgMsg] = useState("");
	
	context = route.params.context
	
	useEffect(() => {
		//load org message from the server here
		//GET to /message
		let orgmsg = "TMP MESSAGE";
		setOrgMsg(orgmsg);
		//check if the user has a currently valid token for this domain
		//GET to /user
		//if status 401 then continue to this page
		//if status 200
		//got to scan
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
			</View>
			{/*back button*/}
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