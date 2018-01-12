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
import ChatScreen from './ChatScreen';
import ChatScreen1 from './ChatScreen1';
import ChatScreen2 from './ChatScreen2';
import ChatScreen3 from './ChatScreen3';



export const RootTabs = TabNavigator({
    Message: {
        screen: MyNotificationsScreen,
        navigationOptions: {
            //tabbar
            tabBarLabel: 'message',
            headerTitle: '消息',

            //title:'common', // headerTitle and tabBarLabel
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
        },
    },
    Live: {
        screen: MyHomeScreen,
        navigationOptions: {


            //tabbar
            //title:'common', // headerTitle and tabBarLabel
            tabBarLabel: 'live',
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
            headerTitle: '直播',
            //header:null,
            //header:( <View style={{height:84,backgroundColor:'orange'}}></View>)
            //headerBackTitle: '后退',
            // headerRight:(<Text>我的</Text>),
            // headerLeft:(<Text onPress={()=>{
            //     alert(123)
            // }}>点我</Text>),
            // headerStyle:{backgroundColor:'orange'},
            // //headerTitleStyle:{color:'white'},
            // headerBackTitleStyle:{fontSize:24,},
            // headerTintColor:'red',
            // gesturesEnabled:true,
            // gestureResponseDistance:{horizontal:100,vertical:100},

        },
    },

},{
    tabBarPosition:'bottom',
    //swipeEnabled:true,
    //animationEnabled:true,
    initialRouteName:'Live',
    lazy:true,
    backBehavior:'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions:{
        // iOS属性
        // 因为第二个tabbar是在页面中创建的，所以前景色的设置对其无效，当然也可以通过设置tintColor使其生效
        activeTintColor:'red', // label和icon的前景色 活跃状态下（选中）。
        inactiveTintColor:'black', // label和icon的前景色 不活跃状态下(未选中)。

        //activeBackgroundColor:'blue', //label和icon的背景色 活跃状态下（选中） 。
        //inactiveBackgroundColor:'green', // label和icon的背景色 不活跃状态下（未选中）。

        showLabel:true, // 是否显示label，默认开启。
        // style:{}, // tabbar的样式。
        // labelStyle:{}, //label的样式。

        // 安卓属性

        // activeTintColor:'', // label和icon的前景色 活跃状态下（选中） 。
        // inactiveTintColor:'', // label和icon的前景色 不活跃状态下(未选中)。
        showIcon:true, // 是否显示图标，默认关闭。
        // showLabel:true, //是否显示label，默认开启。
        // style:{}, // tabbar的样式。
        // labelStyle:{}, // label的样式。
        upperCaseLabel:false, // 是否使标签大写，默认为true。
        // pressColor:'', // material涟漪效果的颜色（安卓版本需要大于5.0）。
        // pressOpacity:'', // 按压标签的透明度变化（安卓版本需要小于5.0）。
        // scrollEnabled:false, // 是否启用可滚动选项卡。
        // tabStyle:{}, // tab的样式。
        // indicatorStyle:{}, // 标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题。
        // labelStyle:{}, // label的样式。
        // iconStyle:{}, // 图标的样式。
    }
})
export const RootNavigator = StackNavigator({
    Home: {
        screen: RootTabs,
        navigationOptions: {
            //headerTitle: 'Home',

            headerStyle:{backgroundColor:'orange'},
            headerTitleStyle:{color:'white',fontSize:24},
            headerBackTitleStyle:{fontSize:24,},
            //headerTintColor:'white',
            gesturesEnabled:true,
            gestureResponseDistance:{horizontal:300},
            headerBackTitle: '后退',
        },
    },
    Chat:{
        screen:ChatScreen,
    },
    Chat1:{
        screen:ChatScreen1,
    },
    Chat2:{
        screen:ChatScreen2,
    },
    Chat3:{
        screen:ChatScreen3,
    }

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
