'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding:20,
    },
    text: {
        color: '#000000'
    }
});

class SingleCapsule extends Component {
    onPress(){
        this.props.navigator.pop()
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.onPress.bind(this)}>
                    <Text>
                        Single Capsule
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

module.exports = SingleCapsule;