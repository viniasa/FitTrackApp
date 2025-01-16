import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import React, { useState } from 'react';

export default function Profile() {
  const router = useRouter();

  // State untuk menyimpan data user
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleSaveChanges = () => {
    // Simpan perubahan user profile (untuk sementara hanya log data)
    console.log({
      username,
      name,
      gender,
      weight,
      height
    });
    alert('Changes Saved!');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={{uri: 'https://via.placeholder.com/150'}} 
        style={styles.profileImage} 
      />
      <Text style={styles.title}>Profile</Text>

      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />

      <TextInput
        style={styles.input}
        value={gender}
        onChangeText={setGender}
        placeholder="Gender"
      />

      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
        placeholder="Weight (kg)"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={height}
        onChangeText={setHeight}
        placeholder="Height (cm)"
        keyboardType="numeric"
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={handleSaveChanges}
      >
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.push("/")} // Kembali ke halaman utama
      >
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eef6f7",
    padding: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Membuat gambar menjadi lingkaran
    marginBottom: 20,
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
    borderRadius: 25,
    marginBottom: 15,
    width: '100%',
  },
  button: {
    backgroundColor: "#469a9f",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 25,
  },
  backButtonText: {
    fontSize: 16,
    color: "#333",
  },
});
