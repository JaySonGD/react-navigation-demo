/**
 * Created by ward on 2018/1/11.
 */
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





export default class MyHomeScreen extends Component<{}> {

    static navigationOptions = ({ navigation }) => ({

        title: 'zhibo2',
        headerRight:(<Text>我的2</Text>),
        headerLeft:(<Text onPress={()=>{
            console.log(navigation)
           navigation.navigate('Chat', { user: 'Lucy' })
        }}>点我2</Text>),
    })

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to MyHomeScreen!
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
        backgroundColor: 'red',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});
