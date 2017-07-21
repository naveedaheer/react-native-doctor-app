/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Header from './src/native/nativeBaseComponents/header';
import { Container } from 'native-base';
import AllComponents from './src/components';

export default class AheerDoctor extends Component {
  render() {
    return (
      <Container>
        <AllComponents>
          
        </AllComponents>
      </Container>
    );
  }
}

AppRegistry.registerComponent('AheerDoctorApp', () => AheerDoctor);
