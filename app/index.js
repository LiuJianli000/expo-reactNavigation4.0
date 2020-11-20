import React, { Component } from 'react'
import appModel from './models/app'
import homeModel from './models/home'
import { Provider  } from 'react-redux'
import App from './router'
 
import { create } from 'dva-core'
 
const models = [
  appModel,
  homeModel
];
 
const app = create()
 
models.forEach((o) => {
  app.model(o)
});
 
app.start()
 
const store = app._store
 
export default class Container extends Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    );
  }
}