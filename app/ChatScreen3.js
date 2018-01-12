
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
    View,
    Button,
} from 'react-native';

import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Home' })
    ]
});

const chat1Action = NavigationActions.reset({
    routeName: 'Chat1',

    params: {headerTitle:'hahaha'},

    action: NavigationActions.navigate({ routeName: 'Chat1'})

});

export default class ChatScreen3 extends Component<{}> {

    static navigationOptions = ({ navigation }) => ({

        title: '聊天3',
        headerRight:(<Text>聊天23</Text>),

    })

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to ChatScreen3!
                </Text>
                <Button title="回到聊天1" onPress={()=>{
                    this.props.navigation.dispatch(chat1Action)
                }}/>
                <Button title="回到root" onPress={()=>{
                    this.props.navigation.dispatch(resetAction)
                }}/>
                <Button title="后退" onPress={()=>{
                    console.log(this.props.navigation)
                    this.props.navigation.goBack()
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
