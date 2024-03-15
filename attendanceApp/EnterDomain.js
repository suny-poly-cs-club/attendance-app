import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Button
} from 'react-native';

const EnterDomain = ({navigation}) => {

	return (
		<View style={styles.global}>
      <View>
  			<Text style = {styles.title}>
  			    Enter Your Domain:
  			</Text>
      </View>
      <View style={styles.input}>
        <TextInput nativeID="domainField" placeholder="Your domain"/>
      </View>
      <View style = {styles.enterButton}>
        <Button title="Enter" />
      </View>
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
