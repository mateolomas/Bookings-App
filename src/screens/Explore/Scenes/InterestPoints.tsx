import React, {useCallback, useEffect} from 'react';
import {Box, Text, VStack} from 'native-base';
import {IRouteTab} from '../../../interfaces/IRouteTab';
import {Dimensions} from 'react-native';
import {TabView} from 'react-native-tab-view';
import {TabBarOptions} from '../../../components/NativeBase/TabBarOptions';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {mapstyle} from '../../../constants/mapstyle';
import ListItem from '../../../components/NativeBase/ListItem';
import {Map} from '../../../components/Map';
import {PermissionsContext} from '../../../context/PermissionsContext';
import useNearbyPlaces from '../../../hooks/useNearbyPlaces';
import {useFocusEffect} from '@react-navigation/native';
import {nearbyPlaces} from '../../../constants/nearbyPlaces';
import ListItemwithIcon from '../../../components/NativeBase/ListItemwithIcon';

import gastronomia from '../../../assets/icons/explore/gastronomia.png';
import eventos from '../../../assets/icons/explore/eventos.png';
import ocio from '../../../assets/icons/explore/ocio.png';

const initialLayout = {
  width: Dimensions.get('window').width,
};

export const InterestPoints = () => {
  const {permissions, askLocationPermission} =
    React.useContext(PermissionsContext);

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState<IRouteTab[]>([
    {
      key: 'first',
      title: 'Gastronomia',
    },
    {
      key: 'second',
      title: 'Eventos',
    },
    {
      key: 'third',
      title: 'Ocio',
    },
    {
      key: 'fourth',
      title: 'Compras',
    },
  ]);

  const renderScene = ({route}: {route: IRouteTab}) => {
    switch (route.key) {
      case 'first':
        return (
          <VStack space={5}>
            <ListItemwithIcon
              name="Gastronomia"
              icon={gastronomia}
              subtitle={'300m'}
            />
            <ListItemwithIcon name="Eventos" icon={eventos} subtitle={'300m'} />
            <ListItemwithIcon name="Ocio" icon={ocio} subtitle={'300m'} />
          </VStack>
        );
    }
  };

  useEffect(() => {
    askLocationPermission();
  }, []);

  return (
    <>
      {/* <Map markers={nearbyPlaces} /> */}
      {/* <Text>{JSON.stringify(permissions, null, 5)}</Text> */}

      <TabView
        navigationState={{
          index,
          routes,
        }}
        renderScene={renderScene}
        renderTabBar={e => (
          <TabBarOptions
            {...e}
            indexTab={index}
            onIndexChange={indexTab => setIndex(indexTab)}
          />
        )}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </>
  );
};
