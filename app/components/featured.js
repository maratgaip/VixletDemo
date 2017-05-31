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
        alignItems: 'center',
        backgroundColor: '#fff',
    }
});

class Featured extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Vixlet Chat Demo
                </Text>
            </View>
        );
    }
}

module.exports = Featured;