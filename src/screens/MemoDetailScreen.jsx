import React from 'react';
import {
  ScrollView, StyleSheet, Text, View,
} from 'react-native';
import AppBar from '../components/AppBar';
import CircleBotton from '../components/CircleBotton';

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2020年12月24日 10:00</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          書体やレイアウトなどを確認するための例文。本文用なので使い方を間違えると布施前にみえることがあります。
        </Text>
      </ScrollView>
      <CircleBotton style={{ top: 160, bottom: 'auto' }} name="edit-2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingHorizontal: 19,
    paddingVertical: 24,
  },
  memoTitle: {
    color: '#fff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: '#fff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
