import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../src/config/firebaseConfig';

export default function FormScreen({ navigation }) {
  const [carName, setCarName] = useState('');
  const [clientName, setClientName] = useState('');
  const [rentalValue, setRentalValue] = useState('');
  const [rentalDate, setRentalDate] = useState('');

  const handleSubmit = async () => {
    if (!carName || !clientName || !rentalValue || !rentalDate) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      await addDoc(collection(db, 'rentals'), {
        carName,
        clientName,
        rentalValue: parseFloat(rentalValue),
        rentalDate,
        createdAt: new Date(),
      });
      Alert.alert('Sucesso', 'Aluguel registrado com sucesso!');
      setCarName('');
      setClientName('');
      setRentalValue('');
      setRentalDate('');
    } catch (error) {
      Alert.alert('Erro', 'Falha ao registrar aluguel: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Aluguel</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do carro"
        value={carName}
        onChangeText={setCarName}
      />

      <TextInput
        style={styles.input}
        placeholder="Nome do cliente"
        value={clientName}
        onChangeText={setClientName}
      />

      <TextInput
        style={styles.input}
        placeholder="Valor do aluguel"
        value={rentalValue}
        onChangeText={setRentalValue}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Data do aluguel (DD/MM/AAAA)"
        value={rentalDate}
        onChangeText={setRentalDate}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});