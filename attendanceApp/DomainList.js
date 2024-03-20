import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  useColorScheme,
  SafeAreaView,
  Button,
  StyleSheet
} from 'react-native';

import Context from './context.js'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

let context = null;

const DomainItem = ({domain}) => {
	if(domain == ''){
		return (
			<View style = {styles.spaceView}>
			</View>
		);
	}
	
	return (
		<View style = {styles.listItems}>
			<Text style={styles.listTextStyle}> {domain} </Text>
			<View style = {styles.listButtons}>
				<Button title = "Select" onPress={() => { selectDomain(domain)}} />
				<Text> {'  '} </Text>
				<Button title = "Remove" onPress={() => { removeDomain(domain)}} color = "red"/>
			</View>
		</View>
	);
}

function removeDomain(domain){
	console.log("removed: ",domain);
	//remove domain from locoal list
	//remove domain from stored list
}

function selectDomain(domain){
	console.log("Selected: ",domain);
	//set context Domain
	//go to sign or login
}	

function goToAddNewScreen(navigation){
	console.log("going to enter new domain screen");
	context.goToPage("enterDomain",navigation);
}

const tmpDomainArray = ["HI","HOW","EEEEEE","1","2","3","4","attendace.reallyLongDomain.co.uk:3000/redirect/api/attandece/abcdefghijklmnopqrstuvwxyz/123456789000","6","7","8","9","10","11","12","13","14","15","16","17","18","19"];

const DomainList = ({navigation, route}) => {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};
	
	const [domains, setDomains] = useState([]);

	context = route.params.context
	//console.log(context);

	useEffect(() => {
		//load domain list here
		let listOfDomains = tmpDomainArray;
		//if the last elemnt of the arry is not an empty string
		if(listOfDomains.length > 0 && listOfDomains[listOfDomains.length-1] != ""){
			listOfDomains.push("");//add a blank element to the end of the array to make sure scrolling works
		}
		setDomains(listOfDomains);
		//if the list is empty
		//goto enter domain
	},[]);
	
	//apperently you should not put listses inside of scroll views
	return (
		<SafeAreaView style={backgroundStyle}>
			
				<Text style={styles.titletext}>
					Select Domain:
				</Text>
				<Button title = "Add New Domain" onPress={() => {goToAddNewScreen(navigation)}}/>
				<FlatList
				data = {domains}
				renderItem={({item}) => <DomainItem domain={item} />}
				contentInsetAdjustmentBehavior="automatic"
				scrollEnabled={true}
				style = {styles.listStyle}
				/>
			
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
  listItems: {
    flex: 1,
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent: 'space-between',
	padding: '0.8%',
  },
  listButtons: {
    flex: 1,
	alignItems: 'center',
	flexDirection: 'row',
	justifyContent: 'flex-end',
  },
  titletext: {
	fontSize: 30,
	textAlign: 'center'
  },
  listStyle: {
	height: '85%'
  },
  listTextStyle: {
	width: '80%'
  },
  spaceView: {
	height: 30
  }
});

export default DomainList;