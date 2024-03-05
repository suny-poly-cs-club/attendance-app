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
      <View>
        <TextInput styles={styles.input} placeholder="Your domain"/>
      </View>
      <View>
        <Button
        title="Enter" />

      </View>
		</View>
	);
};

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: "100%",
  },
});
export default EnterDomain;
