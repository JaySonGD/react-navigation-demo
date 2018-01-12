/**
 * Created by ward on 2018/1/11.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    NativeModules,
    Platform,
} from 'react-native';



export default class MyNotificationsScreen extends Component<{}> {



    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}
                      onPress={()=>{
                          console.log(this.props.navigation.navigate)
                          this.props.navigation.navigate('Chat1', { user: 'Lucy1' })
                      }}
                >
                    Welcome to MyNotificationsScreen!
                </Text>

                <Button title="call" onPress={()=>{

                    var CallPhone = null;
                    if (Platform.OS == 'ios') {
                        CallPhone = NativeModules.CallPhoneModuleIos;
                    } else if (Platform.OS == 'android') {
                        CallPhone = NativeModules.CallPhoneModule;
                    } else if (Platform.OS == 'web') {
                        //暂未实现web功能

                    }
                    //CallPhone.callPhone('4007773177')


                    // CallPhone.call('',(obj1,obj2)=>{
                    //     console.log(obj1);
                    //     console.log(obj12)
                    //
                    // },(error)=>{
                    //     console.log(error)
                    //
                    // });


                    CallPhone.call2('').then(msg => {
                        //msg就是你用resolve返回的值
                        console.log(msg)
                    }).catch(error => {
                        //error就是你用reject返回的值
                        console.log(error)
                    });



                }}/>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});
