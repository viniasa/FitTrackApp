import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import React, { useState } from 'react';


export default function Profile() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={{uri: 'https://via.placeholder.com/150'}} 
          style={styles.profileImage} 
        />
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.profileInfo}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Username:  </Text>
          <Text style={styles.infoValue}>{username}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Name:  </Text>
          <Text style={styles.infoValue}>{name}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Gender:  </Text>
          <Text style={styles.infoValue}>{gender}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Weight:  </Text>
          <Text style={styles.infoValue}>{weight}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Height:  </Text>
          <Text style={styles.infoValue}>{height}</Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={styles.editButton}
          onPress={() => router.push("/components/EditProfil")} // Navigasi ke halaman edit profil
        >
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.push("/")} // Kembali ke halaman utama
        >
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    padding: 20,
    justifyContent: "flex-start",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Membuat gambar profil menjadi lingkaran
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  profileInfo: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    elevation: 3, // Memberikan bayangan pada kotak info
    width: "100%",
  },
  infoRow: {
    flexDirection: "row",
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  infoValue: {
    fontSize: 16,
    color: "#666",
  },
  buttonsContainer: {
    width: "100%",
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "#469a9f",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginBottom: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  backButton: {
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 25,
    width: "80%",
    alignItems: "center",
  },
  backButtonText: {
    fontSize: 16,
    color: "#333",
  },
});
