import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from "react-native";
import ReturnIcon from "../components/icons/ReturnIcon"; // ajusta la ruta si es diferente
import { useNavigation } from "@react-navigation/native";

const SuggestionScreen = () => {
  const navigation = useNavigation();

  const [title, setTitle] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = () => {
    setTitle("");
    setSuggestion("");
    Alert.alert("Sugerencia enviada", "Tu sugerencia ha sido enviada con éxito");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 15 }}>
      {/* ----------------- Botón de retorno ----------------- */}
      <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
        <ReturnIcon />
      </TouchableOpacity>

      {/* ----------------- Título y descripción ----------------- */}
      <Text style={styles.title}>Sugerencias</Text>
      <Text style={styles.description}>
        Este es un apartado de sugerencias anónimas. Cualquier tipo de bug que encuentres o posibles mejoras que se te ocurran puedes enviarlas a través de este cuestionario anónimo.
      </Text>

      {/* ----------------- Input Título ----------------- */}
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />

      {/* ----------------- Input Sugerencia ----------------- */}
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Escribe tu sugerencia..."
        value={suggestion}
        onChangeText={setSuggestion}
        multiline={true}
      />

      {/* ----------------- Botón enviar ----------------- */}
      <TouchableOpacity style={styles.sendButton} onPress={handleSubmit}>
        <Text style={styles.sendButtonText}>Enviar Sugerencia</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  returnButton: {
    marginTop: 25,
    marginBottom: 15
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15
  },
  textArea: {
    height: 120,
    textAlignVertical: "top"
  },
  sendButton: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});

export default SuggestionScreen;
