import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import { Container, StyleProvider } from 'native-base';
import getTheme from './src/native-base-theme/components';
import aheerDoctor from './src/native-base-theme/variables/aheerDoctor';

import Header from './src/native/nativeBaseComponents/header';
import Body from './src/native/nativeBaseComponents/body';
import Footer from './src/native/nativeBaseComponents/footer';
import AddPatient from './src/native/components/patient/addPatient';


export default class AheerDoctor extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(aheerDoctor)} >

        <Container>
          <Header></Header>
          <AddPatient></AddPatient>
          {/*<Body />*/}
          <Footer></Footer>
        </Container>

      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('AheerDoctorApp', () => AheerDoctor);
