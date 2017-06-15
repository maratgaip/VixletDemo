import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  ListView,
  ScrollView
} from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import Chat from './chat';
import SingleMessage from './singleMessage';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1,
    marginTop: 60
  },
  newMessage: {
    paddingLeft: 20
  },
  input: {
    height: 40,
    marginTop: 13,
    backgroundColor: '#eee',
    paddingLeft: 10,
  },
  header: {
    right:0,
    height:40,
    paddingTop: 10,
    backgroundColor: '#868E95'
  }
});

class Create extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const { data } = this.props.conversations;
    this.state = {
      users: this.ds.cloneWithRows(data)
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(text){

    //this.props.fetchUsers(text);
    const { data } = this.props.conversations;
    const filtered = data.filter((item)=>{
      if(item.username.indexOf(text.text.toLowerCase()) > -1){
        return true
      }
    });
    this.setState({users: this.ds.cloneWithRows(filtered)})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Link style={styles.newMessage}  to="/conversations"><Text>Cancel</Text></Link>
          <TextInput
            style={styles.input}
            placeholder={'Type a message'}
            onChangeText={(text) => this.onChange({text})}
            />
        </View>
        <ScrollView style={styles.scrollView}>
          <ListView
            dataSource={this.state.users} enableEmptySections
            renderRow={(rowData) => <SingleMessage user={rowData}  />}
            />
        </ScrollView>
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
    fetchUsers: (text) => dispatch(fetchUsers(text))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Create)
