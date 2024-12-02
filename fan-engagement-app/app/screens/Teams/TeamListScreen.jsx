import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TeamListScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Teams</Text>
    {/* Map over team data here */}
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 16 },
});

export default TeamListScreen;
