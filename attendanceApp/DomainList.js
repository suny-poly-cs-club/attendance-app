import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  useColorScheme,
  SafeAreaView,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';



let v2 = false;

const DomainItem = ({domain}) => {
	return (
		<View style = {styles.listItems}>
			<Text> {domain} </Text>
			<View style = {styles.listButtons}>
				<Button title = "Select" onPress={() => { console.log("EEE")}} />
				<Button title = "Remove" onPress={() => { console.log("EEE")}} color = "red"/>
			</View>
		</View>
	);
}

	

const DomainList = ({navigation}) => {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};
	
	const [domains, setDomains] = useState([]);
	if(!v2){
		setDomains(["HI","HOW","EEEEEE","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"]);
		v2=true;
	}
	
	//apperently FlatList should have a scroll view inside it but it does not seem to be working for me
	//apperently you should not put listses inside of scroll views
	return (
		<SafeAreaView style={backgroundStyle}>
			<ScrollView
			contentInsetAdjustmentBehavior="automatic"
			style={backgroundStyle}>
				<Text>
					Select Domain:
				</Text>
				
				<FlatList
				data = {domains}
				renderItem={({item}) => <DomainItem domain={item} />}
				contentInsetAdjustmentBehavior="automatic"
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
  listItems: {
    flex: 1,
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent: 'space-between',
	padding: '1%',
  },
  listButtons: {
    flex: 1,
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent: 'flex-end',
  }
});

export default DomainList;