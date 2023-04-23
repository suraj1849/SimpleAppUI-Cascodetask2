import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';


//import { View, Text } from 'react-native';
//import { RadioButton } from 'react-native-paper';

// rest of your code



const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleRegister = () => {
    if (name.trim() === '') {
      Alert.alert('Error', 'Please enter your name');
      return;
    }
    if (!/^[a-zA-Z ]+$/.test(name.trim())) {
      Alert.alert('Error', 'Name should not contain numbers');
      return;
    }
    if (age.trim() === '') {
      Alert.alert('Error', 'Please enter your age');
      return;
    }
    if (isNaN(age) || age < 0) {
      Alert.alert('Error', 'Age must be a positive number');
      return;
    }
    if (gender.trim() === '') {
      Alert.alert('Error', 'Please select your gender');
      return;
    }
    Alert.alert('Success', `Registration successful. Name: ${name}, Age: ${age}, Gender: ${gender}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} onChangeText={setName} value={name} />
      <Text style={styles.label}>Age:</Text>
      <TextInput style={styles.input} onChangeText={setAge} value={age} keyboardType="numeric" />
      <Text style={styles.label}>Gender:</Text>
      <View style={styles.radioContainer}>
        <RadioButton
          value="male"
          status={gender === 'male' ? 'checked' : 'unchecked'}
          onPress={() => setGender('male')}
        />
        <Text style={styles.radioLabel}>Male</Text>
        <RadioButton
          value="female"
          status={gender === 'female' ? 'checked' : 'unchecked'}
          onPress={() => setGender('female')}
        />
        <Text style={styles.radioLabel}>Female</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioLabel: {
    fontSize: 16,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
