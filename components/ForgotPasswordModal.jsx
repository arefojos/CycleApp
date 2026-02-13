import React from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function ForgotPasswordModal({ visible, onClose }) {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose} // Para Android
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          {/* Botón cerrar */}
          <Pressable style={styles.closeButton} onPress={onClose}>
            <MaterialIcons name="close" size={24} color="#333" />
          </Pressable>

          <Text style={styles.title}>¡Correo enviado!</Text>
          <Text style={styles.message}>
            Se ha enviado un email a tu correo para reestablecer la contraseña.
          </Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 12,
    right: 12,
    zIndex: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
  },
  message: {
    fontSize: 16,
    color: "#555",
  },
});
