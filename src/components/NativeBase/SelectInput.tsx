import React from 'react';
import {Select, Box, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import {palette} from '../../theme/palette';

const SelectInput = ({label}: {label: string}) => {
  let [service, setService] = React.useState('');
  return (
    <Box h={50} my={30} minWidth={'150'}>
      <Text style={styles.title}>{label}</Text>
      <Select
        selectedValue={service}
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        _selectedItem={{
          bg: 'blue.100',
        }}
        style={{
          borderColor: 'white',
          height: 50,
          borderRadius: 10,
        }}
        mt={1}
        onValueChange={itemValue => setService(itemValue)}>
        <Select.Item label="Ecuadorian" value="ec" />
        <Select.Item label="Colombian" value="col" />
      </Select>
    </Box>
  );
};

const styles = StyleSheet.create({
  title: {
    color: palette.primary,
    fontFamily: 'Trade Gothic LT Std',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
  },
});

export default SelectInput;