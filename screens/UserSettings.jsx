import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import ReturnIcon from "../components/icons/ReturnIcon";
import { useNavigation } from "@react-navigation/native";

const UserSettings = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 15 }}>
      {/* Botón de retorno */}
      <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
        <ReturnIcon />
      </TouchableOpacity>

      <Text style={styles.title}>Ajustes de usuario</Text>

      {/* Opciones */}
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate("NewPasswordScreen")}
      >
        <Text style={styles.optionText}>Cambiar Contraseña</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate("DeleteAccountScreen")}
      >
        <Text style={styles.optionText}>Eliminar la cuenta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate("EditUser")}
      >
        <Text style={styles.optionText}>Editar datos usuario</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  returnButton: { marginBottom: 15 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  optionButton: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },
  optionText: { fontSize: 16, fontWeight: "bold" }
});

export default UserSettings;
