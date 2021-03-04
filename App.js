/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import VectorIcons from "react-native-vector-icons/AntDesign"
import { color } from 'react-native-reanimated';
const Tab = createBottomTabNavigator();


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  HomeScreen() {
    return (
      <View>
        <VectorIcons name="doubleright" size={24} color="#000000" />
        <Text>
          vista home
      </Text>
      </View>
    );

  }
  SettingsScreen() {
    return (
      <View>
        <Text>
          vista settings
    </Text>
      </View>
    );
  }
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              switch (route.name) {
                case 'lista de tareas': {
                  if (focused) {
                    return(
                      <VectorIcons name ="layout" size={23} color='#ffe227'/>
                    );
                  
                  }else {
                    return (
                      <VectorIcons name="layout" size={23} color ='#4d375d' />
                    );
                    
                  }
                }
                case 'Crear Tarea': {
                  if (focused){
                    return ( 
                      <VectorIcons name ="meho" size={23} color='#ffe227'/>
                    );
                  
                  }else {
                    return (
                      <VectorIcons name="meho" size={23} color ='#4d375d' />
                    );
                  }
                }
                
              }
            },

          })}>
          <Tab.Screen name="lista de tareas" component={this.HomeScreen} />
          <Tab.Screen name="Crear Tarea" component={this.SettingsScreen} />
        </Tab.Navigator>

      </NavigationContainer>
    );



  }
}

export default App;
