'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Navigator
} from 'react-native';
var Capsules = require('./capsules');
var SingleCapsule = require('./singleCapsule');

var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding:20
    },
    rowOdd: {
        flex: 1,
        flexDirection: "row",
        height:100
    },
    image: {
        width:100,
        height:115,
        marginRight: 10,
    }
});

class Main extends Component {
    render() {
        return (
            <Navigator
                initialRoute = {{
                    id: "capsules"
                }}
                renderScene={this.navigatorRenderScene}
            />
        );
    }
    navigatorRenderScene(route, navigator){
        switch (route.id) {
            case "capsules":
                return (<Capsules navigator={navigator} title="capsules"/>);
            case "singleCapsule":
                return (<SingleCapsule navigator={navigator} title="Single Capsule"/>)
        }
    }
}

module.exports = Main;