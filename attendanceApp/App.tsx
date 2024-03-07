/**ONLY EDIT ON main BRANCH

install multy sreen for ISO!!
For iOS with bare React Native project, make sure you have CocoaPods installed. Then install the pods to complete the installation:

cd ios
pod install
cd ..
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';//multiple windows
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import ScreenList from './ScreenList.js';
import DomainList from './DomainList.js';
import EnterDomain from './EnterDomain.js';
import SignOrLogIn from './SignOrLogIn.js';
import SignUp from './SignUp.js';
import LogIn from './LogIn.js';
import Scan from './Scan.js';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {


  return (
    <NavigationContainer>
		<Stack.Navigator>
			{/*temporary just for development*/}
			<Stack.Screen name="Screen_list" component={ScreenList} options={{headerShown: false }}/>
			{/*register each screen here*/}
			<Stack.Screen name="Domain_list" component={DomainList} options={{headerShown: false }}/>
			<Stack.Screen name="Enter_domain" component={EnterDomain} options={{headerShown: false }}/>
			<Stack.Screen name="Sign_or_log_in" component={SignOrLogIn} options={{headerShown: false }}/>
			<Stack.Screen name="Sign_up" component={SignUp} options={{headerShown: false }}/> 
			<Stack.Screen name="Log_in" component={LogIn} options={{headerShown: false }}/>
			<Stack.Screen name="Scan" component={Scan} options={{headerShown: false }}/>
		</Stack.Navigator>
	</NavigationContainer>
  );
}


export default App;
