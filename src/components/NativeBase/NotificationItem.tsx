import {Box, Image, Text} from 'native-base';
import React from 'react';
import {ImageSourcePropType} from 'react-native';

interface Props {
  icon: ImageSourcePropType;
  name: string;
  time: string;
  info?: string;
}

const NotificationItem = ({icon, name, time, info}: Props) => {
  return (
    <Box flexDirection={'row'}>
      <Image
        source={icon}
        style={{width: 48, height: 48}}
        alt={'icon-user'}
        rounded={50}
        mr={4}
      />
      <Box flex={1}>
        <Text style={{color: 'white'}} flexWrap={'wrap'}>
          {name} is simply dummy text of the printing and typesetting is simply
          is simply dummy text of the printing and typesetting is simply is
          simply dummy text of the printing and typesetting is simply
        </Text>
        <Text style={{color: 'white'}}>{time}</Text>
      </Box>
    </Box>
  );
};

export default NotificationItem;
