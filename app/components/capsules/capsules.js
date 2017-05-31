'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';

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

class Capsules extends Component {
    onPress(){
     this.props.navigator.push({
         id:"singleCapsule"
     })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowOdd}>
                    <TouchableOpacity onPress={this.onPress.bind(this)}>
                        <Image
                            style={styles.image}
                            source={{uri: 'https://v8h6m4x9.map2.ssl.hwcdn.net/static/capsulecovers/9/user/mlb_field.png?fit=max&w=192'}}
                            />
                    </TouchableOpacity>
                    <Image
                        style={styles.image}
                        source={{uri: 'https://v8h6m4x9.map2.ssl.hwcdn.net/static/capsulecovers/9/user/mlb_field.png?fit=max&w=192'}}
                        />
                    <Image
                        style={styles.image}
                        source={{uri: 'https://v8h6m4x9.map2.ssl.hwcdn.net/static/capsulecovers/9/user/mlb_field.png?fit=max&w=192'}}
                        />
                </View>
                <View style={styles.rowOdd}>
                    <Image
                        style={styles.image}
                        source={{uri: 'https://v8h6m4x9.map2.ssl.hwcdn.net/static/capsulecovers/9/user/mlb_field.png?fit=max&w=192'}}
                        />
                    <Image
                        style={styles.image}
                        source={{uri: 'https://v8h6m4x9.map2.ssl.hwcdn.net/static/capsulecovers/9/user/mlb_field.png?fit=max&w=192'}}
                        />
                </View>
                <View style={styles.rowOdd}>
                    <Image
                        style={styles.image}
                        source={{uri: 'https://v8h6m4x9.map2.ssl.hwcdn.net/static/capsulecovers/9/user/mlb_field.png?fit=max&w=192'}}
                        />
                    <Image
                        style={styles.image}
                        source={{uri: 'https://v8h6m4x9.map2.ssl.hwcdn.net/static/capsulecovers/9/user/mlb_field.png?fit=max&w=192'}}
                        />
                    <Image
                        style={styles.image}
                        source={{uri: 'https://v8h6m4x9.map2.ssl.hwcdn.net/static/capsulecovers/9/user/mlb_field.png?fit=max&w=192'}}
                        />
                </View>
                <View style={styles.rowOdd}>
                    <Image
                        style={styles.image}
                        source={{uri: 'https://v8h6m4x9.map2.ssl.hwcdn.net/static/capsulecovers/9/user/mlb_field.png?fit=max&w=192'}}
                        />
                    <Image
                        style={styles.image}
                        source={{uri: 'https://v8h6m4x9.map2.ssl.hwcdn.net/static/capsulecovers/9/user/mlb_field.png?fit=max&w=192'}}
                        />
                </View>
                <View style={styles.rowOdd}>
                    <Image
                        style={styles.image}
                        source={{uri: 'https://v8h6m4x9.map2.ssl.hwcdn.net/static/capsulecovers/9/user/mlb_field.png?fit=max&w=192'}}
                        />
                    <Image
                        style={styles.image}
                        source={{uri: 'https://v8h6m4x9.map2.ssl.hwcdn.net/static/capsulecovers/9/user/mlb_field.png?fit=max&w=192'}}
                        />
                    <Image
                        style={styles.image}
                        source={{uri: 'https://v8h6m4x9.map2.ssl.hwcdn.net/static/capsulecovers/9/user/mlb_field.png?fit=max&w=192'}}
                        />
                </View>
                <View style={styles.rowOdd}>
                    <Image
                        style={styles.image}
                        source={{uri: 'https://v8h6m4x9.map2.ssl.hwcdn.net/static/capsulecovers/9/user/mlb_field.png?fit=max&w=192'}}
                        />
                    <Image
                        style={styles.image}
                        source={{uri: 'https://v8h6m4x9.map2.ssl.hwcdn.net/static/capsulecovers/9/user/mlb_field.png?fit=max&w=192'}}
                        />
                </View>

            </View>
        );
    }
}

module.exports = Capsules;