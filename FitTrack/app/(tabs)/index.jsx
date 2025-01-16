import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image 
        source={require("../../app/icon.png")} 
        style={styles.icon} 
      />
      <Text style={styles.title}>Welcome to FitTrack</Text>
      <Text style={styles.subtitle}>
       deskripsi
      </Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push("/components/BMICalculator")} // Navigasi ke tab home
      >
        <Text style={styles.buttonText}>BMI Calculator</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push("/components/EnergyCalculator")} // Navigasi ke tab home
      >
        <Text style={styles.buttonText}>Energy Calculator</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => router.push("/components/RecommendedArticles")} // Navigasi ke tab home
      >
        <Text style={styles.buttonText}>Articles</Text>
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
  },
  icon: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    paddingHorizontal: 20,
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
});