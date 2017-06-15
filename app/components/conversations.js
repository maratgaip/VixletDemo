import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'
import Chat from './chat';
import SingleMessage from './singleMessage';
import Create from './create';
import Redirect from 'react-router/Redirect'

import { connect } from 'react-redux'
import { fetchData } from '../actions'

const styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000'
  },
  container: {
    flex: 1
  },
  icon: {
    backgroundColor: '#1DAFEC',
    height: 50,
    width: 50,
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  iconText: {
    color: '#fff'
  },
  loadData: {
    marginTop: 40
  }
});

class Conversations extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  componentWillMount(){
    if (!this.props.conversations.data.length) {
      this.props.fetchData();
    }
  }

  render() {

    let data = (<View><Text>loading</Text></View>);

    if(!this.props.conversations.isFetching && this.props.conversations.data.length){
      const users = this.ds.cloneWithRows(this.props.conversations.data);
      data = (
      <ScrollView style={styles.container}>
        <ListView
          dataSource={users}
          renderRow={(rowData) => <SingleMessage user={rowData}  />}
          />
      </ScrollView>
      );
    }
    return (
      <View style={styles.container}>
        { data }
        <Link style={ styles.icon } to="/create"><Text>Create</Text></Link>
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    conversations: state.conversations
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversations)