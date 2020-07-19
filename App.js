import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';
import StackNavigator from './src/StackNavigator';

class App extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StackNavigator />
      </View>
    );
  }
}



export default App;
