import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';

import React, { useState, useEffect  } from 'react';

function goToSignUpPage(){
	console.log("GO TO SIGN UP");
}

function goToLoginPage(){
	console.log("GO TO LOG IN");
}

const SignOrLogIn = ({navigation, route}) => {
	const [orgMsg, setOrgMsg] = useState("");
	
	useEffect(() => {
		//load org message from the server here
		let orgmsg = "TMP MESSAGE";
		setOrgMsg(orgmsg);
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
				<Button title="Log In" onPress = {goToLoginPage} />
				<Text>{'\n'}</Text>
				<Button title="Sign Up" onPress = {goToSignUpPage}/>
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