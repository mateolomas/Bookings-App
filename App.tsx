import 'react-native-gesture-handler';
import React from 'react';
import GreetingsScreen from './src/screens/GreetingsScreen';
import MainScreen from './src/screens/MainScreen';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabsNavigator} from './src/navigation/BottomTabsNavigator';
import {NativeBaseProvider} from 'native-base';
import {PermissionsProvider} from './src/context/PermissionsContext';
import LoginNavigator from './src/navigation/Login/LoginNavigator';
import StagingNavigator from './src/navigation/StagingNavigator';

const App = () => {
  return (
    <PermissionsProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <BottomTabsNavigator />
          {/* <LoginNavigator /> */}
          {/* {<StagingNavigator />} */}
        </NavigationContainer>
      </NativeBaseProvider>
    </PermissionsProvider>
  );
};

export default App;
