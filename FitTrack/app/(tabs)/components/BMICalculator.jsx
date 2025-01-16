import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [gender, setGender] = useState('');

  const calculateBMI = () => {
    if (!height || !weight || isNaN(height) || isNaN(weight)) {
      alert("Please enter valid height and weight values.");
      return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = parseFloat(weight) / (heightInMeters ** 2);
    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) setCategory('Underweight');
    else if (bmiValue < 24.9) setCategory('Normal weight');
    else if (bmiValue < 29.9) setCategory('Overweight');
    else setCategory('Obesity');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>BMI Calculator</Text>

      <TextInput
        placeholder="Height (cm)"
        keyboardType="numeric"
        style={styles.input}
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        placeholder="Weight (kg)"
        keyboardType="numeric"
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
      />
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={calculateBMI}
      >
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>

      {bmi && (
        <View style={styles.result}>
          <Text>Your BMI: {bmi}</Text>
          <Text>Category: {category}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eef6f7",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#469a9f',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
    marginTop: 30,
    width: '100%',
  },
  result: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: '#333',
  },
  button: {
    backgroundColor: "#469a9f",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 20,
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  pickerContainer: {
    marginBottom: 15,
    width: '100%',

  },
  picker: {
    height: 50,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  pickerWrapper: {
    borderWidth: 2,
    borderColor: '#469a9f',
    borderRadius: 20,
    marginTop: 30,
    width: '100%',
  },
});

export default BMICalculator;
