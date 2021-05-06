import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/welcomeScreen'
import PikachuScreen from './screens/pikachuScreen'
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
export default class App extends React.Component{
    render(){
        return(
           <AppContainer/>


        )
    }
}
var AppNavigator=createSwitchNavigator({
    WelcomeScreen:WelcomeScreen,
    PikachuScreen:PikachuScreen,
})
const AppContainer=createAppContainer(AppNavigator)

