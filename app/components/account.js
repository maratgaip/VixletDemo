'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: '#000'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class Account extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    {this.props.title} Page
                </Text>
            </View>
        );
    }
}

module.exports = Account;