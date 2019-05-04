/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react'
import Biblioteca from './src/telas/Biblioteca'


const app = props => (
    <App />
  )
  

AppRegistry.registerComponent(appName, () => app);
