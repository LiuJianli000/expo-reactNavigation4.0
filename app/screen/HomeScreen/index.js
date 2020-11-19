import React, { Component } from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import { Button } from '@ant-design/react-native'

export default class IndexScreen extends Component {
  render() {
    return (
      <View style={styles.home}>
        <Text>Home Screen</Text>
        <Button onPress={() => this.props.navigation.navigate('Login')} >
          to Login
        </Button>
        <StatusBar />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})