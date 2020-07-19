import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Dashboard from "../screens/Dashboard/Dashboard"
import Setting from "../screens/Setting/Setting"

const Tab = createBottomTabNavigator();
const renderNull = () => {
  return null;
};

const TabsScreen = ({ status }) => (

  // <NavigationContainer>
  <Tab.Navigator

    tabBarOptions={
      {  keyboardHidesTabBar: false,
      
        activeTintColor: '#ffffff',
        inactiveTintColor: '#9e9e9e',
        activeBackgroundColor: "blue",
        inactiveBackgroundColor: "red",
        showLabel: false,
        style: {
          backgroundColor: "yellow",   zIndex:110
        }
      }
    }
  >
    <Tab.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        // title: 'My home',

        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name={'home'} color={color} size={28} />
        ),
      }}
    />
 

 

   
       <Tab.Screen
      name="Setting"
      component={Setting}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="settings" color={color} size={28} />
        ),
      }}
    />
   
  </Tab.Navigator>


);

export default TabsScreen;
  