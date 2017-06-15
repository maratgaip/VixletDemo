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
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000'
  },
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
    console.log(this.props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.arr = [
      {username: 'rogerfederer', created:'10:44 AM', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/56492351fba27d470a7c89f8/0f0d554effae491486bad2b72bee3171/og.jpg?fit=max&w=320&h=320', message: 'Well... give them a helluva show!'},
      {username: 'danielevans', created:'10:44 AM', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/5854439041d2640f00de86da/2ff2e4598a02411c940103ebefba2e95/og.png?fit=max&w=320&h=320', message: 'why u r not answering :))'},
      {username: 'leonardomayer', created:'10:44 AM', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/568d9484fa51d9c00a46a118/c3fb68913392403084b8756ad4d5d87a/og.jpg?fit=max&w=320&h=320', message: 'Yesterday i was talking to a lizard '},
      {username: 'dutzee', created:'10:44 AM', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/56450bf42681faff0ae4b0ba/a1dfccf5a14a46189586075cb638314f/og.jpg?fit=max&w=320&h=320', message: 'no nore donuts, no more donuts...'},
      {username: 'gastao', created:'10:44 AM', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/56460573fba27d470a7c7809/01ddc3b1a24541c683c8292e9d043073/og.jpg?fit=max&w=320&h=320', message: 'i need to win this game and i will!'},
      {username: 'thomas', created:'10:44 AM', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/569464412ce4fc8a725c8468/830975fc39c34864a02aeb6034e60f8e/og.jpg?fit=max&w=320&h=320', message: 'Hey Nadal, will you marry me? :))'},
      {username: 'jirivesely', created:'10:44 AM', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/5695968434a5a185106e64c5/1656eb3056174442b0035dfd7be9f524/og.jpg?fit=max&w=320&h=320', message: 'aaa asd as asdf sadf sadf '},
      {username: 'martinklizan', created:'10:44 AM', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/5695995834a5a185106e64cd/85d4200883734e7bbfc5b0ab5397fe39/og.jpg?fit=max&w=320&h=320', message: '234wetdfsg df sdfg dsf sdfsdfg '},
      {username: 'fidelbonis', created:'10:44 AM', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/5695b411e458306e10314c01/43f91fa6c36c40c9b62f55456f482f75/og.jpg?fit=max&w=320&h=320', message: 'Well... give them a helluva show!'},
      {username: 'leonardomayer', created:'10:44 AM', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/568d9484fa51d9c00a46a118/c3fb68913392403084b8756ad4d5d87a/og.jpg?fit=max&w=320&h=320', message: 'Yesterday i was talking to a lizard '},
      {username: 'dutzee', created:'10:44 AM', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/56450bf42681faff0ae4b0ba/a1dfccf5a14a46189586075cb638314f/og.jpg?fit=max&w=320&h=320', message: 'no nore donuts, no more donuts...'},
      {username: 'gastao', created:'10:44 AM', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/56460573fba27d470a7c7809/01ddc3b1a24541c683c8292e9d043073/og.jpg?fit=max&w=320&h=320', message: 'i need to win this game and i will!'},
      {username: 'thomas', created:'10:44 AM', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/569464412ce4fc8a725c8468/830975fc39c34864a02aeb6034e60f8e/og.jpg?fit=max&w=320&h=320', message: 'Hey Nadal, will you marry me? :))'},
      {username: 'jirivesely', created:'10:44 AM', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/5695968434a5a185106e64c5/1656eb3056174442b0035dfd7be9f524/og.jpg?fit=max&w=320&h=320', message: 'aaa asd as asdf sadf sadf '},
      {username: 'martinklizan', created:'10:44 AM', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/5695995834a5a185106e64cd/85d4200883734e7bbfc5b0ab5397fe39/og.jpg?fit=max&w=320&h=320', message: '234wetdfsg df sdfg dsf sdfsdfg '},
      {username: 'fidelbonis', created:'10:44 AM', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/5695b411e458306e10314c01/43f91fa6c36c40c9b62f55456f482f75/og.jpg?fit=max&w=320&h=320', message: 'Well... give them a helluva show!'}
    ]
    this.state = {
      users: ds.cloneWithRows(this.arr)
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(text){

    //this.props.fetchUsers(text);

    const filtered = this.arr.filter((item)=>{
      if(item.username.indexOf(text.text.toLowerCase()) > -1){
        return true
      }
    });

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({users: ds.cloneWithRows(filtered)})
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
