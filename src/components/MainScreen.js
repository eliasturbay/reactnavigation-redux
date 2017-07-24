import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationActions } from 'react-navigation';

import LoginStatusMessage from './LoginStatusMessage';
import AuthButton from './AuthButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class MainScreen extends React.Component {

  static navigationOptions = {
    title: 'Home Screen',
  };

  componentDidMount() {
    const { navigate } = this.props.navigation;
    navigate('Login');
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginStatusMessage />
        <AuthButton />
      </View>
    );
  }
}
