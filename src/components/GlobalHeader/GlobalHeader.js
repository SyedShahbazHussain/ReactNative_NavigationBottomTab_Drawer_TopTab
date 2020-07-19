import React, {Component} from 'react';
import {TouchableOpacity, Text , View} from 'react-native';
import {Header, Left, Body, Right} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default class GlobalHeader extends Component {
  render() {
    return (
      //         ALL PROPS
      //
      //   <GlobalHeader
      //       leftArrow={true}
      //       leftCross={true}
      //       leftMenu={true}
      //       twoWords={1}
      //       HeadingText= "Dashboard"
      //       rightMore={true}
      //       elevation={4}
      //   backgroundColor={"#f2f2f2"}
      //       navigation={this.props.navigation}
      //         />
 
      <Header
        style={{
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : 'white',
          // elevation: this.props.elevation,
          borderBottomWidth: 0  
        }}>
        <Left
          style={{
            flex: 1,
            height: '100%',
            justifyContent: 'center',
            paddingLeft: 3,
          }}>
          {this.props.leftArrow == true ? (
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <MaterialIcons
                name="keyboard-arrow-left"
                style={{color: '#fff', fontSize: 32}}
              />
            </TouchableOpacity>
          ) : this.props.leftCross == true ? (
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <MaterialIcons
                name="clear"
                style={{color: '#727272', fontSize: 26, paddingLeft: 3}}
              />
            </TouchableOpacity>
          ) : this.props.leftMenu == true ? (
            <TouchableOpacity style={{}}
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <MaterialIcons
                name="menu"
                style={{color: "white", fontSize: 28, paddingLeft: 3}}
              />
            </TouchableOpacity>
          ) : null}
        </Left>

        <Body
          style={
            this.props.twoWords === 1
              ? {flex: 2, justifyContent: 'center'}
              : {flex: 4, borderWidth: 0}
          }>
          {this.props.HeadingText !== '' ? (
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                // fontFamily: Fonts.bold,
                fontWeight:"bold",
                alignSelf: 'center',
              }}>
              {this.props.HeadingText}
            </Text>
          ) : null}
        </Body>

        <Right
          style={{
            borderWidth: 0,
            height: '100%',
            alignItems: 'center',
            paddingRight: 5,
          }}>
          {this.props.rightMore == true ? (
            <TouchableOpacity>
              <FontAwesome name="filter" size={26} color="white" />
            </TouchableOpacity>
          ) : null}
        </Right>
      </Header>
      
    );
  }
}
