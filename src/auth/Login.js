import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
  Platform,
  Keyboard,
  Button, KeyboardAvoidingView, ScrollView
} from 'react-native';
 
class Login extends Component {
  render() {
    return (
      <View style={[styles.container]}>
      <Text>Login Page</Text>
      <Button onPress={()=> this.props.navigation.replace("Drawer")} title={"Login"}>
 
      </Button>
      </View> 
    );
  }
}
 

export default Login;

// export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ffffff',
  },
 
});