import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  TextInput,
  ListView,
  ScrollView,
} from 'react-native';
import { Link, withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { fetchUsers } from '../redux/actions/conversations';
import UserRow from './userRow';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  cancel: {
    padding: 10,
    width: 100,
    position:'absolute',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
  },
  input: {
    height: 40,
    paddingLeft:35,
    fontSize: 14,
  },
  searchText: {
    paddingLeft: 10,
    paddingTop: 11,
    fontSize: 14,
    position:'absolute',
    color: '#878f96',
  },
  suggested: {
    paddingLeft: 10,
    paddingTop: 5,
    color: '#858d94',
  },
  search: {
    height: 40,
    backgroundColor: '#eee',
  },
  content: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 20,
  },
  header: {
    height: 40,
    paddingTop: 10,
    backgroundColor: '#868e95',
  },
});

class Create extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      search: '',
      users: this.ds.cloneWithRows(this.props.users),
    };
    this.runQuery = this.runQuery.bind(this);
    this.onChange = debounce( (text) => this.runQuery(text), 500, { leading: false, trailing: true } );
  }

  componentWillReceiveProps(nextProps) {
    // FIXME: this is a lame comparison, we should do something more intelligent than length
    if (this.props.users.length !== nextProps.users.length) {
      this.setState({ users: this.ds.cloneWithRows(nextProps.users) });
    }
  }

  runQuery(text) {
    this.setState({ search: text });
    this.props.dispatch(fetchUsers(text));
  }

  render() {
    let suggested = <Text style={styles.suggested}>Suggested</Text>;
    if (this.state.search.length) {
      suggested = null
    }
    let data = <View style={styles.content}><ActivityIndicator /></View>;

    if (!this.props.isFetching) {
      if(!this.props.users.length) {
        data = <View style={styles.content}><Text>No results found</Text></View>
      } else {
        const users = this.ds.cloneWithRows(this.props.users);
        data = (
          <ScrollView style={styles.scrollView}>
            <ListView
              dataSource={users}
              enableEmptySections
              renderRow={rowData => <UserRow {...rowData} />}
              />
          </ScrollView>
        );
      }
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.cancel}>
            <Link to="/conversations"><Text style={styles.headerText}>Cancel</Text></Link>
          </View>
          <View style={styles.title}>
            <Text style={styles.headerText}>New Message</Text>
          </View>
        </View>
        <View style={styles.search}>
          <Text style={styles.searchText}>To:</Text>
          <TextInput
            style={styles.input}
            placeholder={'Search for a user'}
            onChangeText={this.onChange}
            />
        </View>
        { suggested }
        { data }
      </View>
    );
  }
}

Create.propTypes = {
  users: PropTypes.array.isRequired,
  isFetching: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { users, isFetching } = state.conversations;
  return {
    users,
    isFetching
  };
}

export default withRouter(connect(mapStateToProps)(Create));
