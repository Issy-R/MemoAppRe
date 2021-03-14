import React from 'react';
import {
  Alert, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

export default function LogOutBotton() {
  const navigation = useNavigation();

  function hundlePress() {
    firebase.auth().signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'LogIn' }],
        });
      })
      .catch(() => {
        Alert.alert('ログアウトに失敗しました。');
      });
  }
  return (
    <TouchableOpacity style={styles.container} onPress={hundlePress}>
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
  },
});
