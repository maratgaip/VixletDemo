import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-native';
import {
  StyleSheet,
  View,
  Text,
  Image,
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
    flex: 1,
  },
  text: {
    fontSize: 15,
    color: '#b2b2b2',
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

class UserRow extends Component {
  render() {
    const { id, username, avatar, statuses } = this.props;
    const conversationTime = moment( statuses.created ).utc().fromNow();
    return (
      <Link to={`/conversation/${id}`}>
        <View style={styles.container}>
          <Image source={{ uri: avatar.original }} style={styles.avatar} />
          <View style={styles.content}>
            <View style={styles.title}>
              <Text style={styles.username}>{ username }</Text>
              <Text style={styles.text}>{ conversationTime }</Text>
            </View>
            <View style={styles.title}>
              <Text style={styles.text}>Last message will be here</Text>
            </View>
          </View>
        </View>
      </Link>
    );
  }
}

UserRow.propTypes = {
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.object.isRequired,
};


export default UserRow;
