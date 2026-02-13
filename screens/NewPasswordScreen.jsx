import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from "react-native";
import ReturnIcon from "../components/icons/ReturnIcon";
import { useNavigation } from "@react-navigation/native";

const NewPasswordScreen = () => {
  const navigation = useNavigation();
  const [current, setCurrent] = useState("");
  const [newPass, setNewPass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");

  const handleSubmit = () => {
    setCurrent(""); setNewPass(""); setRepeatPass("");
    Alert.alert("Éxito", "Tu contraseña se ha cambiado correctamente");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 15 }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.returnButton}>
        <ReturnIcon />
      </TouchableOpacity>

      <Text style={styles.title}>Cambio de Contraseña</Text>

      <TextInput
        style={styles.input}
        placeholder="Introduce tu contraseña actual"
        value={current}
        onChangeText={setCurrent}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Introduce tu nueva contraseña"
        value={newPass}
        onChangeText={setNewPass}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Repite tu nueva contraseña"
        value={repeatPass}
        onChangeText={setRepeatPass}
        secureTextEntry
      />

      <TouchableOpacity style={styles.sendButton} onPress={handleSubmit}>
        <Text style={styles.sendButtonText}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  returnButton: { marginBottom: 15 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginBottom: 15
  },
  sendButton: {
    backgroundColor: "#007bff", paddingVertical: 15, borderRadius: 10, alignItems: "center"
  },
  sendButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 }
});

export default NewPasswordScreen;
