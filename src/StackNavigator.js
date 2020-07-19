import React, { Component } from 'react';
import { NavigationContainer, } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, } from '@react-navigation/stack';
import Login from './auth/Login';
import Drawer from './drawer/Drawer';
 

const AuthStack = createStackNavigator();
import 'react-native-gesture-handler';

function StackNavigator() {
  return (
    <NavigationContainer >

      <AuthStack.Navigator 
      initialRouteName="Login"
        // headerMode="card" mode="card" 
        screenOptions={{
          gestureEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          // mode: 'card',
          gestureDirection: "horizontal",
          // transitionConfig: () => StackViewTransitionConfigs.SlideFromRightIOS,
        }}>
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false, headerLeft: null,
            gestureEnabled: false,
          }}
        />
    <AuthStack.Screen
          name="Drawer"
          component={Drawer}
          options={{
            headerShown: false, headerLeft: null,
            gestureEnabled: false,
          }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>

  );
}

export default StackNavigator;
