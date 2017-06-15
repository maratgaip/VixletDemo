'use strict';
import React, { Component } from 'react';
import {
  Link,
} from 'react-router-native';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  username: {
    fontSize: 16,
  },
  created: {
    fontSize: 16,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1
  },
  text: {
    fontSize: 15,
    color: '#777',
  },
  unread: {
    width: 8,
    height: 8,
    marginTop: 20,
    marginLeft: 5,
    borderRadius: 5,
    backgroundColor: '#000'
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10
  }
});

class Message extends Component {
  constructor( props ) {
    super( props );
    this.messageClick = this.messageClick.bind(this)
  }
  messageClick = () =>{
    const { user, navigation  } = this.props;
    navigation.navigate('Chat', { ...user });
  };
  render() {
    const { avatar, username, message, created } = this.props.user;
    const userId = 10;
    return (
      <Link to={`/conversation/${userId}`}>
        <View style={ styles.container }>
          <Image source={{ uri: avatar }} style={ styles.avatar } />
          <View style={ styles.content }>
            <View style={ styles.title }>
              <Text style={ styles.username }>{ username }</Text>
              <Text style={ styles.created }>{ created }</Text>
            </View>
            <Text style={ styles.text }>{ message }</Text>
          </View>
          <View style={ styles.unread }></View>
      </View>
    </Link>
    );
  }
}

module.exports = Message;