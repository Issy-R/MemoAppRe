import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleBotton from '../components/CircleBotton';

export default function MemoListScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CircleBotton name="plus" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
