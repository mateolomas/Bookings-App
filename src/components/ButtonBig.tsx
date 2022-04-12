import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {palette} from '../theme/palette';

const ButtonBig = () => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.button}>NEXT</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#F7F4EB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 30,
    padding: 20,
    marginHorizontal: 28,
  },
  button: {
    color: palette.primary,
    fontFamily: 'Trade Gothic LT Std Extended',
  },
});
export default ButtonBig;