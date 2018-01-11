/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  View,
  Alert,
} from 'react-native';

import {StackNavigator,TabNavigator} from 'react-navigation'

import MyHomeScreen from './MyHomeScreen';
import MyNotificationsScreen from './MyNotificationsScreen';



export const RootTabs = TabNavigator({
    Home: {
        screen: MyHomeScreen,
        navigationOptions: {


            //tabbar
            //title:'common', // headerTitle and tabBarLabel
            tabBarLabel: 'Home',
            tabBarVisible:true,
            //swipeEnabled:true,
            tabBarIcon: (({tintColor,focused}) => {
                return(
                    <Image
                        source={!focused ? require('./resource/home.png') : require('./resource/home_select.png')}
                        //style={[{height:25,width:25 }, {tintColor: tintColor}]}
                        style={[{height:25,width:25 },]}

                    />
                )
            }),
            tabBarOnPress:(obj)=>{
                console.log(obj);
                obj.jumpToIndex(obj.scene.index)
            },

            //nav
            //title:'common', // headerTitle and tabBarLabel
            headerTitle: '首页',
            //header:null,
            //header:( <View style={{height:84,backgroundColor:'orange'}}></View>)
            headerBackTitle: '后退',
            headerRight:(<Text>我的</Text>),
            headerLeft:(<Text onPress={()=>{
                alert(123)
            }}>点我</Text>),
        },
    },
    Profile: {
        screen: MyNotificationsScreen,
        navigationOptions: {
            tabBarLabel: 'Profile',
            headerTitle: '我的',

        },
    },
})
export const RootNavigator = StackNavigator({
    Home: {
        screen: RootTabs,
        navigationOptions: {
            //headerTitle: 'Home',
        },
    },

})

export default class App extends Component<{}> {



  render() {
    return (
          <RootNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },

})
