import React from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';

import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';

const HomeStack = StackNavigator({
  HomeScreen: { screen: MainScreen },
  ProfileScreen: { screen: ProfileScreen }
});

const MainScreenNavigator = TabNavigator({
  Home: { screen: HomeStack },
  Profile: { screen: ProfileScreen }
});

export const AppNavigator = StackNavigator({
  Main: { screen: MainScreenNavigator },
  Login: { screen: LoginScreen }
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
