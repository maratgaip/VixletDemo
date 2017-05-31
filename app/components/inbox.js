import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  ScrollView
} from 'react-native';
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
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      users: ds.cloneWithRows([
        {username: 'rogerfederer', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/56492351fba27d470a7c89f8/0f0d554effae491486bad2b72bee3171/og.jpg?fit=max&w=320&h=320', message: 'Well... give them a helluva show!'},
        {username: 'danielevans', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/5854439041d2640f00de86da/2ff2e4598a02411c940103ebefba2e95/og.png?fit=max&w=320&h=320', message: 'why u r not answering :))'},
        {username: 'leonardomayer', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/568d9484fa51d9c00a46a118/c3fb68913392403084b8756ad4d5d87a/og.jpg?fit=max&w=320&h=320', message: 'Yesterday i was talking to a lizard '},
        {username: 'dutzee', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/56450bf42681faff0ae4b0ba/a1dfccf5a14a46189586075cb638314f/og.jpg?fit=max&w=320&h=320', message: 'no nore donuts, no more donuts...'},
        {username: 'gastao', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/56460573fba27d470a7c7809/01ddc3b1a24541c683c8292e9d043073/og.jpg?fit=max&w=320&h=320', message: 'i need to win this game and i will!'},
        {username: 'thomas', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/569464412ce4fc8a725c8468/830975fc39c34864a02aeb6034e60f8e/og.jpg?fit=max&w=320&h=320', message: 'Hey Nadal, will you marry me? :))'},
        {username: 'jirivesely', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/5695968434a5a185106e64c5/1656eb3056174442b0035dfd7be9f524/og.jpg?fit=max&w=320&h=320', message: 'aaa asd as asdf sadf sadf '},
        {username: 'martinklizan', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/5695995834a5a185106e64cd/85d4200883734e7bbfc5b0ab5397fe39/og.jpg?fit=max&w=320&h=320', message: '234wetdfsg df sdfg dsf sdfsdfg '},
        {username: 'fidelbonis', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/5695b411e458306e10314c01/43f91fa6c36c40c9b62f55456f482f75/og.jpg?fit=max&w=320&h=320', message: 'Well... give them a helluva show!'},
        {username: 'leonardomayer', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/568d9484fa51d9c00a46a118/c3fb68913392403084b8756ad4d5d87a/og.jpg?fit=max&w=320&h=320', message: 'Yesterday i was talking to a lizard '},
        {username: 'dutzee', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/56450bf42681faff0ae4b0ba/a1dfccf5a14a46189586075cb638314f/og.jpg?fit=max&w=320&h=320', message: 'no nore donuts, no more donuts...'},
        {username: 'gastao', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/56460573fba27d470a7c7809/01ddc3b1a24541c683c8292e9d043073/og.jpg?fit=max&w=320&h=320', message: 'i need to win this game and i will!'},
        {username: 'thomas', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/569464412ce4fc8a725c8468/830975fc39c34864a02aeb6034e60f8e/og.jpg?fit=max&w=320&h=320', message: 'Hey Nadal, will you marry me? :))'},
        {username: 'jirivesely', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/5695968434a5a185106e64c5/1656eb3056174442b0035dfd7be9f524/og.jpg?fit=max&w=320&h=320', message: 'aaa asd as asdf sadf sadf '},
        {username: 'martinklizan', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/5695995834a5a185106e64cd/85d4200883734e7bbfc5b0ab5397fe39/og.jpg?fit=max&w=320&h=320', message: '234wetdfsg df sdfg dsf sdfsdfg '},
        {username: 'fidelbonis', avatar: 'https://v8h6m4x9.map2.ssl.hwcdn.net/10/images/5695b411e458306e10314c01/43f91fa6c36c40c9b62f55456f482f75/og.jpg?fit=max&w=320&h=320', message: 'Well... give them a helluva show!'}
      ])
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <ListView
            dataSource={this.state.users}
            renderRow={(rowData) => <SingleMessage navigation={this.props.navigation} user={rowData}  />}
            />
        </ScrollView>
      </View>
    );
  }
}

export const Inbox = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'MyATP'
    }
  },
  Chat: {
    screen: Chat,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.username
    })
  }
});

module.exports = Inbox;