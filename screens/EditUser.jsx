import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from "react-native";
import ReturnIcon from "../components/icons/ReturnIcon";
import { useNavigation } from "@react-navigation/native";

const EditUser = ({ userData }) => {
  const navigation = useNavigation();

  const [nombre, setNombre] = useState(userData?.nombre || "");
  const [pronombres, setPronombres] = useState(userData?.pronombres || "");
  const [email, setEmail] = useState(userData?.email || "");
  const [altura, setAltura] = useState(userData?.altura || "");
  const [fechaNacimiento, setFechaNacimiento] = useState(userData?.fechaNacimiento || "");
  const [sexo, setSexo] = useState(userData?.sexo || "");

  const handleSubmit = () => {
    // Aquí puedes enviar los datos al backend
    Alert.alert("Datos actualizados", "Tus datos han sido actualizados correctamente");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 15 }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.returnButton}>
        <ReturnIcon />
      </TouchableOpacity>

      <Text style={styles.title}>Cambio de datos de usuario</Text>

      <TextInput style={styles.input} placeholder="Nombre" value={nombre} onChangeText={setNombre} />
      <TextInput style={styles.input} placeholder="Pronombres" value={pronombres} onChangeText={setPronombres} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Altura" value={altura} onChangeText={setAltura} />
      <TextInput style={styles.input} placeholder="Fecha de nacimiento" value={fechaNacimiento} onChangeText={setFechaNacimiento} />
      <TextInput style={styles.input} placeholder="Sexo" value={sexo} onChangeText={setSexo} />

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
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginBottom: 15 },
  sendButton: { backgroundColor: "#007bff", paddingVertical: 15, borderRadius: 10, alignItems: "center", marginTop: 10 },
  sendButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 }
});

export default EditUser;
