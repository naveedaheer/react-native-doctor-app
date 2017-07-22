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
import Body from './src/native/nativeBaseComponents/body';
import Footer from './src/native/nativeBaseComponents/footer';

import { Container, StyleProvider } from 'native-base';
import getTheme from './src/native-base-theme/components';
import aheerDoctor from './src/native-base-theme/variables/aheerDoctor';
//import AllComponents from './src/components';

export default class AheerDoctor extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(aheerDoctor)} >

        <Container>
          <Header></Header>
          <Body></Body>
          <Footer></Footer>
        </Container>

      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('AheerDoctorApp', () => AheerDoctor);
