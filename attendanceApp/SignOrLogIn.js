import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import React, { useState } from 'react';

const SignOrLogIn = ({navigation}) => {
	const [orMsg, setOrgMsg] = useState("");
	
	return (
		<View>
			<Text style={styles.title}>
				SIGN UP {'\n'} OR {'\n'} LOG IN
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
  mainBox: {
    fontWeight: '700',
  },
  title: {
	fontSize: 30,
	textAlign: "center"
  }
});


export default SignOrLogIn;