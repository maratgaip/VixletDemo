import React from 'react';
import PropTypes from 'prop-types';
import {
	View,
	StyleSheet,
} from 'react-native';
import { Route, withRouter } from 'react-router-native';
import { connect } from 'react-redux';

import Conversations from '../components/conversations';
import Chat from '../components/chat';
import Create from '../components/create';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
	},
});

const Routes = (props) => (
	<View style={styles.container}>
		<Route
			exact
			path="/"
			render={() => {
        const { initialView } = props;
        if (initialView === 'create') {
          return <Create />;
        } else if (initialView === 'chat') {
          return <Chat />;
        }
        return <Conversations />;
      }}
			/>
		<Route exact path="/conversation/:id" render={() => (<Chat />)} />
		<Route exact path="/conversations" render={() => (<Conversations />)} />
		<Route exact path="/create" render={() => (<Create />)} />
	</View>
);

const mapStateToProps = state => ({
	initialView: state.app.initialView,
});

Routes.propTypes = {
	initialView: PropTypes.string.isRequired,
};

export default withRouter(connect(mapStateToProps)(Routes));
