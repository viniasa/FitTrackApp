import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RecommendedArticles = () => {
  const articles = [
    { title: 'Understanding BMI', link: 'https://example.com/bmi' },
    { title: 'Top Exercises for Burning Calories', link: 'https://example.com/exercises' },
    { title: 'Healthy Diet Tips', link: 'https://example.com/diet' },
  ];

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Recommended Articles</Text>
      {articles.map((article, index) => (
        <Text key={index} style={styles.link}>
          {article.title}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  link: {
    color: 'blue',
    marginBottom: 5,
  },
});

export default RecommendedArticles;
