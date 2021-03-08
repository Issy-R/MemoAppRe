import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string, shape } from 'prop-types';
import { Feather } from '@expo/vector-icons';

export default function CircleBotton(props) {
  const { style, name } = props;
  return (
    <View style={[styles.circleBotton, style]}>
      <Text style={styles.circleBottonLabel}><Feather name={name} size={32} color="#fff" /></Text>
    </View>
  );
}

CircleBotton.propTypes = {
  style: shape(),
  name: string.isRequired,
};

CircleBotton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  circleBotton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleBottonLabel: {
    color: '#FFF',
    fontSize: 40,
    lineHeight: 40,
  },
});