import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  ListView,
  ScrollView,
} from 'react-native';
import { Link, withRouter } from 'react-router-native';
import { connect } from 'react-redux';

import SingleMessage from './singleMessage';
import { fetchConversations } from '../redux/actions/conversations';

const styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000',
  },
  container: {
    flex: 1,
  },
  icon: {
    backgroundColor: '#1DAFEC',
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  iconText: {
    color: '#fff',
  },
  loadData: {
    marginTop: 40,
  },
});

class Conversations extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  componentWillMount() {
    if (!this.props.conversations.data.length) {
      this.props.dispatch(fetchConversations());
    }
  }

  render() {
    let data = <ActivityIndicator />;

    if (!this.props.conversations.isFetching && this.props.conversations.data.length) {
      const conversations = this.ds.cloneWithRows(this.props.conversations.data);
      data = (
        <ScrollView style={styles.container}>
          <ListView
            dataSource={conversations}
            renderRow={rowData => <SingleMessage message={rowData} />}
          />
        </ScrollView>
      );
    }
    return (
      <View style={styles.container}>
        { data }
        <Link style={styles.icon} to="/create"><Text>Create</Text></Link>
      </View>
    );
  }
}

Conversations.propTypes = {
  conversations: PropTypes.shape({
    data: PropTypes.array,
    isFetching: PropTypes.boolean,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    conversations: state.conversations,
    token: state.app.token,
  };
}

export default withRouter(connect(mapStateToProps)(Conversations));
