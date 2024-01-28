/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
//EVERY elemrnt used MUST be imported from somewhere
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function App(): React.JSX.Element {
  //runtime state variables. used to make this dynamic winthin a page
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0); // start with count 0
  //the format is this:
  //const [<var name>, <set function name>] = useState(<default value>);
  //var name is the name of the varibale used to acces the data
  //set function name is the name of the function used to change the value of the data
  //default value is the initial value of the varible
  
  
  
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  //comments in normla javascript are like normal
  //comments in markup language formatted sections are required to be multyline comments inside of {}
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />{/*the react native logo and welcome text*/}
		{/*this is accualy a function found in react-native/Libraries/NewAppScreen*/}
		
		
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
		  {/*View elements re quivlent to div in html*/}
		  <View>
			  <Text>
			  {/*All renderd thext must be inside of a Text elemtnt*/}
				pee pee poo poo ghr;aksgjr
				{'\n'}
				 peppeppeppeldoepld
				
				</Text>
		  </View>
		  
        </View>
		
		<View>
      <Text style={styles.title}>
		{/*because styles is set to title this acts like part of the head element*/}
        The title and onPress handler are required. It is recommended to set
        accessibilityLabel to help make your app usable by everyone.
      </Text>
	  
	  
	  <View style = {styles.padder}>
		  <Button
			title="Press me"
			onPress={() => {
				Alert.alert('This is an allert window');
				setIsVisible(true);//make the image visable
				setCount(count + 1); // increment count on button press
			}}
			style = {styles.buttonIzer}
		  />
	  </View>
	  {/* the folowing ony appears when isVisible is true*/}
	  {isVisible && (
	    <View>
			<Text style = {styles.highlight} >Button pressed {count} times</Text>
			<Image source={require('./Untitled.png')} style={{ width: 500, height: 500 }}/>
			
		</View>
      )}
    </View>
      </ScrollView>
    </SafeAreaView>
	
  );
}

//basicaly css but slightly diffrent
const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
  buttonIzer: {
	padding: '12%',
  },
  padder: {
	padding: "12%",
  }
});

export default App;
