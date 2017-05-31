import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  username: {
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    color: '#777'
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10
  }
});

class Chat extends Component {
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Image source={{ uri: params.avatar}} style={styles.avatar} />
        <View>
          <View>
            <Text style={styles.username}>{params.username}</Text>
          </View>
          <View>
            <Text style={styles.text}>{params.message}</Text>
          </View>
        </View>
      </View>
    );
  }
}

module.exports = Chat;
