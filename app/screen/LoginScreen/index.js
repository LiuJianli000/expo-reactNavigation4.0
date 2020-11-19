import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.login}>
        <Text>Login Page</Text>
        <Button
          title='to Home'
          onPress={() => this.props.navigation.navigate('Main')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})