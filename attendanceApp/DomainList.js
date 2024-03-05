import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';



let v2 = false;

	

const DomainList = ({navigation}) => {
	const [domains, setDomains] = useState([]);
	if(!v2){
		setDomains(["HI","HOW","EEEEEE"]);
		v2=true;
	}
	
	
	return (
		<View>
			<Text>
				Select Domain:
			</Text>
			
			 <FlatList
			 data = {domains}
			 renderItem={({item}) => <Text> {item} </Text>}
			/>
		</View>
	);
};

export default DomainList;