import {Box, Text} from 'native-base';
import React from 'react';
import ButtonBig from '../../../components/NativeBase/ButtonBig';
import SectionTitle from '../../../components/NativeBase/SectionTitle';
import TextSection from '../../../components/NativeBase/TextSection';
import ScanIcon from '../../../assets/icons/Scan';
import {palette} from '../../../theme/palette';
import {TouchableOpacity} from 'react-native';

const ScanID = ({onPress}: {onPress: () => void}) => {
  return (
    <Box flex={6}>
      <SectionTitle title="Scan ID / Passport" />
      <TextSection>You should see the code code (MRZ) IS.</TextSection>
      <TouchableOpacity>
        <Box alignItems={'center'}>
          <Box
            justifyContent={'center'}
            alignItems={'center'}
            w={200}
            h={200}
            mt={1}
            rounded={100}
            borderWidth={1}
            borderColor={palette.secondary}
            backgroundColor={'rgba(187, 187, 187, 0.1)'}>
            <ScanIcon color={palette.secondary} />
            <Text
              mt={3}
              color={palette.secondary}
              fontFamily={'Trade Gothic LT Std'}
              fontStyle="normal"
              fontWeight="400"
              fontSize={15}
              lineHeight={18}>
              Scan
            </Text>
          </Box>
        </Box>
      </TouchableOpacity>
      <ButtonBig name="NEXT" onPress={onPress} />
    </Box>
  );
};

export default ScanID;
