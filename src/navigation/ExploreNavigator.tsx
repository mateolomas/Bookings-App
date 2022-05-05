import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Explore_screen from '../screens/Explore/Explore_screen';
import TransportService from '../screens/Explore/TransportService';
import PlanPostInfo from '../screens/Explore/PlanPostInfo';

const Stack = createStackNavigator();

export type RootStackParamList = {
  Explora: undefined;
};

const ExploreNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Explora" component={Explore_screen} />
      <Stack.Screen name="Transport" component={TransportService} />
      <Stack.Screen name="PlanTripInfo" component={PlanPostInfo} />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;