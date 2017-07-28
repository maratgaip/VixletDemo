import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';
import { distanceInWordsToNow } from 'date-fns';
import Swipeout from 'react-native-swipeout';
import {
  StyleSheet,
  View,
  Text,
  ActionSheetIOS,
  TouchableHighlight,
  Image,
} from 'react-native';
import { deleteConversation, blockUser } from '../redux/actions/conversations';
import _ from 'lodash';

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
  },
  body: {
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
    flex: 1,
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
    backgroundColor: '#000',
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  check: {
    height: 25,
    width: 25,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 20,
  },
});

class Conversation extends Component {

  constructor(props){
    super(props);
    this.state = {
      check: false
    };
    this.blockUser = this.blockUser.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
    this.deleteConversation = this.deleteConversation.bind(this);
  }

  getUserInfo() {
    const { message } = this.props;
    if (!message) {
      return '';
    }
    const filteredMembers = message.members.filter(member => member !== this.props.myUserId);
    const user = this.props.users[filteredMembers[0]];
    if (user) {
      return user;
    }
    console.log('Error finding user in users store');
    return '';
  }

  deleteConversation(id) {
    return function(){
      this.props.dispatch(deleteConversation(id));
    }.bind( this );
  }

  blockUser(id) {
    return function(){
      this.props.dispatch(blockUser(id));
    }.bind( this );
  }

  render() {
    const {
      message: {
        id,
        lastMessage: message,
        lastMessageTimestamp,
        unread,
        },
      } = this.props;

    const { username, id: userId, avatar: { original: avatar }} = this.getUserInfo();
    const swipeBtns = [{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: '#ddd',
      onPress:  this.deleteConversation(id)
    },
    {
      text: `Block`,
      backgroundColor: 'grey',
      underlayColor: '#ddd',
      onPress:  this.blockUser(userId)
    }];
    return (
    <View style={styles.body}>
      <Swipeout right={swipeBtns}
                autoClose={true}
                underlayColor="#ddd"
                backgroundColor='transparent'>
        <Link to={`/conversation/${id}`} underlayColor="#ddd">
          <View style={styles.container}>
            <Image source={{ uri: avatar }} style={styles.avatar} />
            <View style={styles.content}>
              <View style={styles.title}>
                <Text style={styles.username}>{ username }</Text>
                <Text style={styles.created}>{ !!lastMessageTimestamp && `${distanceInWordsToNow(lastMessageTimestamp)} ago` }</Text>
              </View>
              <Text style={styles.text}>{ message }</Text>
            </View>
            { unread && <View style={styles.unread} /> }
          </View>
        </Link>
      </Swipeout>
    </View>
    );
  }
}

Conversation.propTypes = {
  users: PropTypes.object.isRequired,
  myUserId: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  const { users } = state.conversations.entities;
  return {
    myUserId: state.app.user.id,
    users,
  };
}

export default connect(mapStateToProps)(Conversation);
