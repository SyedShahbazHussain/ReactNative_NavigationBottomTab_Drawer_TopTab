import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Directory from './Directory/Directory';
import Setting from './Setting/Setting';
import Notification from './Notification';
import CheckIn from './CheckIn';
import Profile from './Profile/Profile';
import PayScreenModal from "./BottomModal" 
import AddButton from './Addbutton';
import BottomTabBadge from "./BottomTabBadge"
import Home from "./TopTab/MaterialTopTab"
import { View } from 'native-base';

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
        activeBackgroundColor: theme.darkBlue,
        inactiveBackgroundColor: theme.darkBlue,
        showLabel: false,
        style: {
          backgroundColor: theme.darkBlue,   zIndex:110
        }
      }
    }
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        // title: 'My home',

        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name={'home'} color={color} size={28} />
        ),
      }}
    />

    <Tab.Screen
      name="Notification"
      component={Notification}
      options={{
        tabBarIcon: ({ color, size }) => (
          <View>
            <BottomTabBadge />
            <MaterialIcons name="notifications" color={color} size={28} style={28} />
          </View>
        ),
      }}
    />

<Tab.Screen
      name="Directory"
      component={Directory}
      options={{

        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name={'perm-contact-calendar'} color={color} size={28} />

        ),
      }}
    />

    <Tab.Screen
      name={'AddButton'}
      component={AddButton}
      options={{
        style: {

        },
        tabBarButton: () =>(<View style={{zIndex:110}}><PayScreenModal /></View>)
          // <AddButton style={{ height: 50, width: 50, elevation: 5000 }} />
        // <AddButton  style={{height:280, width:280, elevation:5000}}/>  
      }}
    />
    <Tab.Screen
      name="CheckIn"
      component={CheckIn}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="watch-later" color={color} size={28} />
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
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        // tabBarVisible: false,
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="account-circle" color={color} size={28} />
        ),
      }}
    />
  </Tab.Navigator>


);

export default TabsScreen;
  