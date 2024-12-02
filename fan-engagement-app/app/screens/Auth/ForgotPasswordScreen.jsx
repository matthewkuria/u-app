import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");

  const handlePasswordReset = () => {
    // Add password reset logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Button title="Reset Password" onPress={handlePasswordReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 16 },
  title: { fontSize: 24, marginBottom: 16, textAlign: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 8, marginBottom: 16 },
});

export default ForgotPasswordScreen;
