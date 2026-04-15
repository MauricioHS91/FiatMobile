import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../src/config/firebaseConfig';

export default function ListScreen() {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'rentals'), (querySnapshot) => {
      const rentalsList = [];
      querySnapshot.forEach((doc) => {
        rentalsList.push({ id: doc.id, ...doc.data() });
      });
      setRentals(rentalsList);
    });

    return unsubscribe;
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.text}>Carro: {item.carName}</Text>
      <Text style={styles.text}>Cliente: {item.clientName}</Text>
      <Text style={styles.text}>Valor: R$ {item.rentalValue}</Text>
      <Text style={styles.text}>Data: {item.rentalDate}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Aluguéis</Text>
      <FlatList
        data={rentals}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});