import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class ProductScreen extends Component {
  render() {
    return (
      <View>
        <Text>Product Screen</Text>
        <Button title="to Order" onPress={() => this.props.navigation.navigate('Order')} />
      </View>
    )
  }
}