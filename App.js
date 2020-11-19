import React from 'react'
import { StatusBar, View } from 'react-native'
import { createAppContainer } from 'react-navigation';
import AppNavigator from './app/router'

export default createAppContainer(AppNavigator)