import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const EnergyCalculator = () => {
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('6'); // Default MET for running
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState(null);

  const calculateEnergy = () => {
    if (!weight || !duration || isNaN(weight) || isNaN(duration)) {
      alert("Please enter valid weight and duration values.");
      return;
    }

    const caloriesBurned = (parseFloat(activity) * parseFloat(weight) * 3.5 * parseFloat(duration)) / 200;
    setCalories(caloriesBurned.toFixed(2));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Energy and Calorie Simulator</Text>

      <TextInput
        placeholder="Weight (kg)"
        keyboardType="numeric"
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
      />

      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={activity}
          onValueChange={(itemValue) => setActivity(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Walking (3 MET)" value="3" />
          <Picker.Item label="Running (6 MET)" value="6" />
          <Picker.Item label="Cycling (8 MET)" value="8" />
          <Picker.Item label="Swimming (10 MET)" value="10" />
        </Picker>
      </View>

      <TextInput
        placeholder="Duration (minutes)"
        keyboardType="numeric"
        style={styles.input}
        value={duration}
        onChangeText={setDuration}
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={calculateEnergy}
      >
        <Text style={styles.buttonText}>Calculate Energy</Text>
      </TouchableOpacity>

      {calories && (
        <View style={styles.result}>
          <Text>Calories Burned: {calories} kcal</Text>
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
    fontSize: 30,
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
  pickerWrapper: {
    borderWidth: 2,
    borderColor: '#469a9f',
    borderRadius: 30,
    marginTop: 30,
    width: '100%',
  },
  picker: {
    height: 50,
  },
});

export default EnergyCalculator;
