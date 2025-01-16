import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, ScrollView, Image } from 'react-native';

const RecommendedArticles = () => {
  const articles = [
    { 
      title: 'Bahaya Obesitas', 
      link: 'https://puskesmasandalas.padang.go.id/bahaya-obesitas/',
      imageUrl: 'https://puskesmasandalas.padang.go.id/wp-content/uploads/2021/03/17_Juni_01.png' // Ganti dengan URL gambar yang sesuai
    },
    { 
      title: '6 Bahaya Badan yang Terlalu Kurus!', 
      link: 'https://cdn.hellodoktor.com/wp-content/uploads/2021/09/28b10f2d-shutterstock_1015923469.jpg?w=1080&q=100',
      imageUrl: 'https://cdn.hellodoktor.com/wp-content/uploads/2021/09/28b10f2d-shutterstock_1015923469.jpg?w=1080&q=100' // Ganti dengan URL gambar yang sesuai
    },
    { 
      title: 'Tips mengatasi Obesitas', 
      link: 'https://p2ptm.kemkes.go.id/infographic-p2ptm/obesitas/tips-mengatasi-obesitas',
      imageUrl: 'https://p2ptm.kemkes.go.id/uploads//TmQwU05BQS9YYlJpanB5VnNtRldFUT09/28_Agustus_06.png' 
    },
    { 
      title: 'Fakta Seputar Obesitas di Indonesia', 
      link: 'https://hellosehat.com/nutrisi/obesitas/fakta-seputar-obesitas-di-indonesia/',
      imageUrl: 'https://cdn.hellosehat.com/wp-content/uploads/2016/08/Fakta-Seputar-Obesitas-di-Indonesia.jpg'
    },
  ];

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Recommended Articles</Text>
      {articles.map((article, index) => (
        <View key={index} style={styles.articleContainer}>
          <Image source={{ uri: article.imageUrl }} style={styles.image} />
          <TouchableOpacity onPress={() => openLink(article.link)}>
            <Text style={styles.link}>{article.title}</Text>
          </TouchableOpacity>
        </View>
      ))}
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
  articleContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  link: {
    color: '#469a9f',
    marginBottom: 10,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default RecommendedArticles;
