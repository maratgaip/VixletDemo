import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';
import { distanceInWordsToNow } from 'date-fns';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import _ from 'lodash';

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
});

class Conversation extends Component {
  render() {
    const {
      message: {
        id,
        members,
        lastMessage: message,
        lastMessageTimestamp,
        unread,
        },
      myUserId,
      } = this.props;

    const filteredMembers = members.filter(member => member !== myUserId);

    let otherUser;

    if (filteredMembers[0]) {
      otherUser = this.props.users[filteredMembers[0]];
    }

    const username = _.get(otherUser, 'username', '');
    const avatar = _.get(otherUser, 'avatar.original', '');

    return (
      <Link to={`/conversation/${id}`} underlayColor="#ddd" >
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
