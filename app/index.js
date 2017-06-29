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
  componentWillMount() {
    const {
      domain,
      initialView,
      originApi,
      token,
      user,
    } = this.props;

    const appData = {
      domain,
      initialView,
      originApi,
      token,
      user,
    };
    store.dispatch(setData(appData));
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <NativeRouter>
            <DirectMessage />
          </NativeRouter>
        </View>
      </Provider>
    );
  }
}

App.propTypes = {
  domain: PropTypes.object.isRequired,
  initialView: PropTypes.string,
  originApi: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
};

App.defaultProps = {
  initialView: 'conversations',
};

export default App;
