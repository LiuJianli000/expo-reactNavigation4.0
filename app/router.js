import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator  } from 'react-navigation-tabs'
import AntDesign from 'react-native-vector-icons/AntDesign'

import LoginScreen from './screen/LoginScreen'
import HomeScreen from './screen/HomeScreen'
import OrderScreen from './screen/OrderScreen'
import ProductScreen from './screen/ProductScreen'
import StoreScreen from './screen/StoreScreen'

// 底部子导航，设置导航头
const OrderNavigator = createStackNavigator({
  Order: {
    screen: OrderScreen,
    navigationOptions: {
      title: '订单',
      headerLeft: () => null,
      headerTitleAlign: 'center'
    }
  }
})
const ProductNavigator = createStackNavigator({
  Product: {
    screen: ProductScreen,
    navigationOptions: {
      title: '产品',
      headerLeft: () => null,
      headerTitleAlign: 'center'
    }
  }
})
const StoreNavigator = createStackNavigator({
  Product: {
    screen: StoreScreen,
    navigationOptions: {
      title: '商店',
      headerLeft: () => null,
      headerTitleAlign: 'center'
    }
  }
})

// 底部导航栏
const BottomNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: '主页',
        tabBarIcon: ({tintColor, focused}) => 
          <AntDesign name="home" size={22} style={{ color: tintColor }} />
      }
    },
    Order: {
      screen: OrderNavigator,
      navigationOptions: {
        tabBarLabel: '订单',
        tabBarIcon: ({tintColor, focused}) => 
          <AntDesign name="paperclip" size={22} style={{ color: tintColor }} />
      }
    },
    Product: {
      screen: ProductNavigator,
      navigationOptions: {
        tabBarLabel: '产品',
        tabBarIcon: ({tintColor, focused}) => 
          <AntDesign name="tago" size={22} style={{ color: tintColor }} />
      }
    },
    Store: {
      screen: StoreNavigator,
      navigationOptions: {
        tabBarLabel: '商店',
        tabBarIcon: ({tintColor, focused}) => 
          <AntDesign name="isv" size={22} style={{ color: tintColor }} />
      }
    }
  },
  {
    // 修改底部导航样式
    tabBarOptions: {
      activeTintColor: '#FE4066',
      inactiveTintColor: 'gray',
    }
  }
)

// app 主导航栏
const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    BottomNavBar: {
      screen: BottomNavigator,
    },
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'pink'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    },
    mode: 'modal',
    headerMode: 'none'
  }
)

export default AppNavigator