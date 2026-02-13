import React from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet, ScrollView } from "react-native";
import ReturnIcon from "../components/icons/ReturnIcon";
import { useNavigation } from "@react-navigation/native";

const DeleteAccountScreen = () => {
  const navigation = useNavigation();

  const handleDelete = () => {
    // Aquí iría la lógica de eliminar la cuenta
    Alert.alert("Cuenta eliminada", "Tu cuenta se ha eliminado correctamente");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 15 }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.returnButton}>
        <ReturnIcon />
      </TouchableOpacity>

      <Text style={styles.warning}>
        Si eliminas tu cuenta esta no podrá ser recuperada en un futuro. ¿Estás segur@ de querer eliminar esta cuenta?
      </Text>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>Eliminar de forma definitiva</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  returnButton: { marginBottom: 15 },
  warning: { fontSize: 16, marginBottom: 20 },
  deleteButton: { backgroundColor: "#ff4d4d", padding: 15, borderRadius: 10, alignItems: "center" },
  deleteButtonText: { color: "#fff", fontWeight: "bold", fontSize: 16 }
});

export default DeleteAccountScreen;
