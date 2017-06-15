import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types'
import { NativeRouter, Route } from 'react-router-native'
import Conversations from './conversations';
import Chat from './chat';
import Create from './create';
import Redirect from 'react-router/Redirect'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  }
});

class directMessage extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" render={() => {
          const { initialView } = this.props;
          if (initialView === 'create') {
            return <Create/>
          } else if (initialView === 'chat') {
            return <Chat/>
          }
          return <Conversations {...this.props}/>
          }}/>

          <Route exact path="/conversation/:id" render={() => ( <Chat/> )}/>
          <Route exact path="/conversations" render={() => ( <Conversations/> )}/>
          <Route exact path="/create" render={() => ( <Create/> )}/>
        </View>
      </NativeRouter>
    );
  }
}

module.exports = directMessage;