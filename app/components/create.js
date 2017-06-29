import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ListView,
  ScrollView,
} from 'react-native';
import { Link, withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/actions/conversations';
import UserRow from './userRow';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    marginTop: 60,
  },
  newMessage: {
    paddingLeft: 20,
  },
  input: {
    height: 40,
    marginTop: 13,
    backgroundColor: '#eee',
    paddingLeft: 10,
  },
  header: {
    right: 0,
    height: 40,
    paddingTop: 10,
    backgroundColor: '#868E95',
  },
});

class Create extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      users: this.ds.cloneWithRows(this.props.users),
    };
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // FIXME: this is a lame comparison, we should do something more intelligent than length
    if (this.props.users.length !== nextProps.users.length) {
      this.setState({ users: this.ds.cloneWithRows(nextProps.users) });
    }
  }

  // TODO: Debounce me
  onChange(text) {
    this.props.dispatch(fetchUsers(text));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Link style={styles.newMessage} to="/conversations"><Text>Cancel</Text></Link>
          <TextInput
            style={styles.input}
            placeholder={'Search for a user'}
            onChangeText={this.onChange}
          />
        </View>
        <ScrollView style={styles.scrollView}>
          <ListView
            dataSource={this.state.users}
            enableEmptySections
            renderRow={rowData => <UserRow {...rowData} />}
          />
        </ScrollView>
      </View>
    );
  }
}

Create.propTypes = {
  users: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    users: state.conversations.users,
  };
}

export default withRouter(connect(mapStateToProps)(Create));
