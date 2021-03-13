import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import MemoList from '../components/MemoList';
import CircleBotton from '../components/CircleBotton';
import LogOutBotton from '../components/LogOutBotton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutBotton />,
    });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsbscribe = () => { };
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      unsbscribe = ref.onSnapshot((snapshot) => {
        const userMemos = [];
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          const data = doc.data();
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          });
        });
        setMemos(userMemos);
      }, (error) => {
        console.log(error);
        Alert.alert('データの読み込みに失敗しました。');
      });
    }
    return unsbscribe;
  }, []);

  return (
    <View style={styles.container}>
      <MemoList memos={memos} />
      <CircleBotton
        name="plus"
        onPress={() => { navigation.navigate('MemoCreate'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
