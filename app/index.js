import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Platform,
} from 'react-native';
import { Provider } from 'react-redux';
import { NativeRouter } from 'react-router-native';
import configureStore from './config/configureStore';
import { setData } from './redux/actions/app';
import Routes from './routes';

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

  getChildContext() {
    return { platform: Platform.OS }
  }

  componentWillMount() {
    const {
      initialView,
      originApi,
      token,
      user: userJson,
      domain: domainJson,
      } = this.props;

    const user = (typeof userJson === 'string') ? JSON.parse(userJson) : userJson;
    const domain = (typeof domainJson === 'string') ? JSON.parse(domainJson) : domainJson;
    const appData = {
      domain,
      initialView,
      originApi,
      token,
      user,
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
            <Routes />
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

App.childContextTypes = {
  platform: PropTypes.string.isRequired
};

App.defaultProps = {
  initialView: 'conversations',
};

export default App;
