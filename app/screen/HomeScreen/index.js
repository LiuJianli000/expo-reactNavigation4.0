import React, { Component } from 'react'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import { Button } from '@ant-design/react-native'
import { connect } from 'react-redux'

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.home}>
        <Text>Home Screen</Text>
        <Button onPress={() => this.props.navigation.navigate('Login')} >
          to Login
        </Button>
        <Text>{this.props.name}</Text>
        <Button
          onPress={() => {
            this.props.dispatch({
              type: 'home/changeName',
              payload: {
                name: 'change name'
              }
            })
          }}
        >
          change name
        </Button>
        <Button
          onPress={() => {
            this.props.dispatch({
              type: 'home/asyncOp',
              payload: {
                name: 'async name'
              }
            })
          }}
        >
          async change
        </Button>
        <StatusBar />
      </View>
    )
  }
}

export default connect(state => ({ name: state.home.name }))(HomeScreen)

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})