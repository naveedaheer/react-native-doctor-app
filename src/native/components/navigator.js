import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation'
import AddPatient from './patient/addPatient';
import ViewPatient from './patient/viewPatient';


const Navigation = StackNavigator({
    addPatient: { screen: AddPatient },
    viewPatient: { screen: ViewPatient }
});

export default Navigation;