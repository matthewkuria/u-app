import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NewsListScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>News</Text>
    {/* Map over the news data here */}
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 16 },
});

export default NewsListScreen;
