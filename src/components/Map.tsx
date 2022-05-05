import React, {useContext, useEffect, useRef} from 'react';
import {Dimensions, Platform, View} from 'react-native';
import MapView, {Marker, Polyline, PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import {Location} from '../interfaces/ILocation';
import {useLocation} from '../hooks/useLocation';
import LoadingScreen from '../screens/LoadingScreen';
import {mapstyle} from '../constants/mapstyle';
import {palette} from '../theme/palette';
import Fab from './Fab';

interface Props {
  markers?: Location[];
  coords: Location;
  polyline?: Location[];
  showUserLocation?: boolean;
  isMarker?: boolean;
  zoom?: number;
}

export const Map = ({
  markers,
  coords,
  polyline,

  showUserLocation = true,
  zoom = 0.009,
}: Props) => {
  let {width, height} = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = zoom;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  const {
    hasLocation,
    getCurrentLocation,
    followUserLocation,
    userLocation,
    stopFollowUserLocation,
  } = useLocation();

  const mapViewRef = useRef<MapView>();
  const following = useRef<boolean>(true);

  useEffect(() => {
    followUserLocation();
    return () => {
      stopFollowUserLocation();
    };
  }, []);

  useEffect(() => {
    if (!following.current) {
      return;
    }
    const {latitude, longitude} = userLocation;
    mapViewRef.current?.animateCamera({
      center: {latitude, longitude},
    });
  }, [userLocation]);

  const centerPosition = async () => {
    const {latitude, longitude} = await getCurrentLocation();
    following.current = true;
    mapViewRef.current?.animateCamera({
      center: {latitude, longitude},
    });
  };

  if (!hasLocation) {
    return <LoadingScreen />;
  }

  return (
    <>
      <MapView
        ref={el => (mapViewRef.current = el!)}
        provider={PROVIDER_GOOGLE}
        /* mapPadding={{top: 0, right: 0, bottom: 350, left: 0}} */
        style={{flex: 1}}
        customMapStyle={mapstyle}
        loadingEnabled
        initialRegion={{
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        onTouchStart={() => (following.current = false)}>
        {polyline && (
          <Polyline
            coordinates={polyline!}
            strokeColor="black"
            strokeWidth={5}
            lineJoin="round"
            strokeColors={[
              '#7F0000',
              '#B24112',
              '#E5845C',
              '#238C23',
              '#7F0000',
            ]}
          />
        )}
        <Marker coordinate={userLocation}>
          <Icon name="airplane" size={30} color={palette.secondary} />
        </Marker>

        {markers && (
          <>
            <Marker
              coordinate={{
                latitude: markers[0].latitude,
                longitude: markers[0].longitude,
              }}>
              <Icon name="flag" size={40} color="black" />
            </Marker>

            <Marker
              coordinate={{
                latitude: markers[markers.length - 1].latitude,
                longitude: markers[markers.length - 1].longitude,
              }}>
              <Icon name="golf" size={40} color="black" />
            </Marker>
          </>
        )}
      </MapView>

      <Fab
        iconName="compass-outline"
        onPress={centerPosition}
        style={{
          position: 'absolute',
        }}
      />
    </>
  );
};