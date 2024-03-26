import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Button
} from 'react-native';
import {useState} from 'react';

let context = null;

const EnterDomain = ({navigation, route}) => {
	const [inputText, setInputText] = useState('');
	context = route.params.context

	return (
		<View style={styles.global}>
      <View>
  			<Text style = {styles.title}>
  			    Enter Your Domain:
  			</Text>
      </View>
      <View style={styles.input}>
        <TextInput nativeID="domainField" placeholder="Your domain" onChangeText={newText => setInputText(newText)}/>
      </View>
      <View style = {styles.enterButton}>
        <Button title="Enter" onPress={() => {
			//verify domain (GET to /ver) shoule match "attendance app cs"
			
			
			//save the new domain to the stored list
			//set the context domain(same as prevous step)
			context.addNewDomain(inputText);
			//goto sign or login
			context.goToPage("signOrLogin",navigation);
		}}/>
      </View>
	  {/*back button*/}
		</View>
	);
};

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    width: "100%",
  },
  global: {
    padding: 20,
  },
  title: {
    paddingBottom: 10,
    fontSize: 25,
  },
  enterButton: {
    paddingTop: 10,
  }

});
export default EnterDomain;
