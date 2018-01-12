/**
 * Created by ward on 2018/1/12.
 */
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



export default class ChatScreen2 extends Component<{}> {

    static navigationOptions = ({ navigation }) => ({

        title: '聊天2',
        headerRight:(<Text>聊天22</Text>),

    })

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}
                      onPress={()=>{
                          this.props.navigation.navigate('Chat3', { user: 'Lucy3' })
                      }}
                >
                    Welcome to ChatScreen2!
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
