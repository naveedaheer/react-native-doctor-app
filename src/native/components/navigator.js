import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation'
import AddPatient from './patient/addPatient';
import viewPatientList from './patient/viewPatientList';


const Navigation = StackNavigator({
    addPatient: { screen: AddPatient },
    viewPatientList: { screen: viewPatientList }
});

export default Navigation;