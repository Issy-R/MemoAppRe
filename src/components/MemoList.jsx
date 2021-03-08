import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function MemoList() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListTitle}>買い物リスト</Text>
          <Text style={styles.memoListDate}>2020年12月24日</Text>
        </View>
        <View>
          <Text><Feather name="x" size={16} color="#B0B0B0" /></Text>
        </View>
      </View>
      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListTitle}>買い物リスト</Text>
            <Text style={styles.memoListDate}>2020年12月24日</Text>
          </View>
          <View>
            <Text><Feather name="x" size={16} color="#B0B0B0" /></Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListTitle}>買い物リスト</Text>
            <Text style={styles.memoListDate}>2020年12月24日</Text>
          </View>
          <View>
            <Text><Feather name="x" size={16} color="#B0B0B0" /></Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});