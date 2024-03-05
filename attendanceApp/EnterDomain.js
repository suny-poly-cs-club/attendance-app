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
		<View>
			<Text>
			    Enter Your Domain:
			</Text>
      <View style={styles.input}>
        <TextInput placeholder="Your domain"/>
      </View>
      <View>
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
    paddingTop: 10,
    paddingRight: 10,
    width: "80%",
  },
});
export default EnterDomain;
