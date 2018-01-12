/**
 * Created by ward on 2018/1/12.
 */
/**
 * Created by ward on 2018/1/12.
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



export default class ChatScreen1 extends Component<{}> {

    static navigationOptions = ({ navigation }) => ({

        title: '聊天1',
        headerRight:(<Text>聊天21</Text>),

    })

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}
                      onPress={()=>{
                          this.props.navigation.navigate('Chat2', { user: 'Lucy2' })
                      }}
                >
                    Welcome to ChatScreen1!
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
