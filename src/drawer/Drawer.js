import * as React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import BottomTab from '../bottomTab/BottomTab';
 

const Drawer = createDrawerNavigator();
const WIDTH = Dimensions.get('window').width;
function CustomDrawerContent(props) {
  const signOutAsync = () => {
    props.navigation.dispatch(DrawerActions.closeDrawer());
    props.navigation.replace('Login');
   
  };

  return (
    <DrawerContentScrollView {...props} bounces={false} horizontal>
      <StatusBar backgroundColor={"blue"} />
      <View style={{ marginTop: 15, height: '100%', marginBottom: 5 }}>
      
        <DrawerItemList {...props} />
        <TouchableOpacity
          style={{ flexDirection: 'row', marginLeft: 25, marginTop: 15 }}
          onPress={() => signOutAsync()}>
          {/* <Image
            source={require('../../../assets/images/ic_logout_filled.png')}
            style={{ height: 24, width: 30, marginLeft: 5 }}
            resizeMode={'contain'}
          /> */}

          <Text style={{ marginLeft: 18, fontSize: 16, color: '#61656e' }}>
            Logout
          </Text>
        </TouchableOpacity>

        <View style={{ flex: 0.85, alignItems: 'center' }}>
          <View style={{ position: 'absolute', bottom: 0 }}>
            <Text
              style={{
                // fontFamily: Fonts.blackFont,
                color: "blue",
                fontSize: 12,
                textAlign: 'center',
                left: '15%',
              }}>
              Version: 1.0
            </Text>
            <Text
              style={{
                // fontFamily: Fonts.blackFont,
                color: "blue",
                fontSize: 12,
                textAlign: 'center',
                left: '15%',
              }}>
              {/* Inner Update Version: 1.0 */}
            </Text>
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const DrawerScreen = props => (
  <Drawer.Navigator
    initialRouteName="BottomTab"
    drawerContent={props => CustomDrawerContent(props)}
    drawerPosition="left"
    // drawerType={'back'},slide, permanent, front
    drawerContentOptions={{
      activeTintColor: "red",
      inactiveTintColor: "blue",
      activeBackgroundColor:"yellow",
      inactiveBackgroundColor: "orange",
      itemStyle: { marginTop: -1 },
      labelStyle: { fontSize: 16, marginLeft: -10 },
      drawerWidth: WIDTH * 0.8,
    }}>
    <Drawer.Screen
      name="BottomTab"
      component={BottomTab}
      options={{
        title: 'BottomTab',

        drawerIcon: ({}) => (
          <SimpleLineIcons
            name={'home'}
            size={24}
            color={"red"}
            style={{ marginLeft: 14 }}
          />
        ),
      }}
    />

    {/* <Drawer.Screen
      name="Attendance"
      component={Attendance}
      options={{
        title: 'Attendance',
        drawerIcon: ({}) => (
          <SimpleLineIcons
            name={'user-following'}
            size={24}
            color={theme.orange}
            style={{ marginLeft: 14 }}
          />
        ),
      }}
    /> */}
    
  </Drawer.Navigator>
);

 
 

export default DrawerScreen;
