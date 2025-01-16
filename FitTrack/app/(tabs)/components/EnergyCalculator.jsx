import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Picker } from 'react-native';

const EnergyCalculator = () => {
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('6'); // Default MET for running
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState(null);

  const calculateEnergy = () => {
    const caloriesBurned = (parseFloat(activity) * parseFloat(weight) * 3.5 * parseFloat(duration)) / 200;
    setCalories(caloriesBurned.toFixed(2));
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Energy and Calorie Simulator</Text>
      <TextInput
        placeholder="Weight (kg)"
        keyboardType="numeric"
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
      />
      <Picker
        selectedValue={activity}
        onValueChange={(itemValue) => setActivity(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Walking (3 MET)" value="3" />
        <Picker.Item label="Running (6 MET)" value="6" />
        <Picker.Item label="Cycling (8 MET)" value="8" />
        <Picker.Item label="Swimming (10 MET)" value="10" />
      </Picker>
      <TextInput
        placeholder="Duration (minutes)"
        keyboardType="numeric"
        style={styles.input}
        value={duration}
        onChangeText={setDuration}
      />
      <Button title="Calculate Energy" onPress={calculateEnergy} />
      {calories && (
        <View style={styles.result}>
          <Text>Calories Burned: {calories} kcal</Text>
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

export default EnergyCalculator;
