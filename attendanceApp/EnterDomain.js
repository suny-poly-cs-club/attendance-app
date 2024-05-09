import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Button,
  Alert
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
			//do pre processing on the domain
			let enteredDomain = inputText;
			//remove prefix protocal if enterd
			enteredDomain = enteredDomain.replace("http://","");
			enteredDomain = enteredDomain.replace("https://","");
			//remove a trailing slash if included
			if(enteredDomain.charAt(enteredDomain.length-1)=='/'){
				enteredDomain = enteredDomain.substring(0,enteredDomain.length-1);
			}
			
			//verify domain (GET to /ver) shoule match "attendance app cs"
			fetch('https://'+enteredDomain+"/ver").then( (res) =>{
				//getting the raw content is very anoying
				res.text().then(text =>{
					if(text == "attendance app cs"){
						//save the new domain to the stored list
						//set the context domain(same as prevous step)
						context.addNewDomain(enteredDomain,"https://");
						//goto sign or login
						context.goToPage("signOrLogin",navigation);
					}else{
						Alert.alert("Domain Not Valid!");
					}
				});
			}).catch(err =>{
				console.log("https failed trying htttp");
				//if it failed the first time try with http insted of https
				fetch('http://'+enteredDomain+"/ver").then( (res2) =>{
					//getting the raw content is very anoying
					res2.text().then(text =>{
						if(text == "attendance app cs"){
							//save the new domain to the stored list
							//set the context domain(same as prevous step)
							context.addNewDomain(enteredDomain,"http://");
							//goto sign or login
							context.goToPage("signOrLogin",navigation);
						}else{
							console.log("failed");
							Alert.alert("Domain Not Valid!");
						}
					});
				}).catch(err2 =>{
					console.error(err2," attempted domain:",enteredDomain);
					Alert.alert("an error occored");
				});
			});
		}}/>
		<Text>{'\n'}</Text>
		{context.domainData.length > 0 && (
			<Button title="Back" onPress={() => {
				context.goToPage("domainList",navigation);
			}} />
		)}
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
