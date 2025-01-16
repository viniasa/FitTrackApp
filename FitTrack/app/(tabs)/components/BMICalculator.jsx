import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = parseFloat(weight) / (heightInMeters ** 2);
    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) setCategory('Underweight');
    else if (bmiValue < 24.9) setCategory('Normal weight');
    else if (bmiValue < 29.9) setCategory('Overweight');
    else setCategory('Obesity');
  };

  return (
    <View style={styles.card}>
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
      <Button title="Calculate BMI" onPress={calculateBMI} />
      {bmi && (
        <View style={styles.result}>
          <Text>Your BMI: {bmi}</Text>
          <Text>Category: {category}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  result: {
    marginTop: 10,
  },
});

export default BMICalculator;
