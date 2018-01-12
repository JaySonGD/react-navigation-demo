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
    Platform,
    StyleSheet,
    Text,
    View
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
