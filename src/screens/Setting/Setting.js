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
 
class Setting extends Component {
  render() {
    return (
      <View style={[styles.container]}>
      <Text>Setting</Text>
      </View> 
    );
  }
}
 

export default Setting;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ffffff',
  },
 
});