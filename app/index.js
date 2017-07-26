import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import { NativeRouter } from 'react-router-native';
import DirectMessage from './components/directMessage';
import configureStore from './components/configureStore';
import { setData } from './redux/actions/app';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const store = configureStore();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.id
    };
  }
  componentWillMount() {
    const {
      initialView,
      originApi,
      token,
      user,
      domain
      } = this.props;

    const userData = (typeof user === 'string') ? JSON.parse(user) : user;
    const domainData = (typeof domain === 'string') ? JSON.parse(domain) : domain;

    const appData = {
      domain: domainData,
      initialView,
      originApi,
      token,
      user: userData,
    };
    store.dispatch(setData(appData));
  }

  componentWillReceiveProps(nextProps){
    if ( this.props.user.id !== nextProps.user.id ) {
      this.forceUpdate();
    }
  }

  render() {
    return (
      <Provider store={store} >
        <View style={styles.container}>
          <NativeRouter>
            <DirectMessage id={this.state.id} />
          </NativeRouter>
        </View>
      </Provider>
    );
  }
}

App.propTypes = {
  domain: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  initialView: PropTypes.string,
  originApi: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
};

App.defaultProps = {
  initialView: 'conversations',
};

export default App;
