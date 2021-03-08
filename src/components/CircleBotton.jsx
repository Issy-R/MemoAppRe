import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';
import { Feather } from '@expo/vector-icons';

export default function CircleBotton(props) {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleBotton, style]} onPress={onPress}>
      <Text style={styles.circleBottonLabel}><Feather name={name} size={32} color="#fff" /></Text>
    </TouchableOpacity>
  );
}

CircleBotton.propTypes = {
  style: shape(),
  name: string.isRequired,
  onPress: func,
};

CircleBotton.defaultProps = {
  style: null,
  onPress: null,
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
