// components/LoginComponent.jsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LogoComponent from "./LogoComponent";
import ForgotPasswordModal from "./ForgotPasswordModal";

export default function LoginComponent({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleForgotPassword = () => {
    // TODO: Aquí llamas al backend
    // fetch("/api/forgot-password", ...)

    // Abrir modal
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <LogoComponent />
      <View style={{ height: 25 }} />
      <Text style={styles.title}>Login</Text>

      {/* Username */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Username o Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Username o Email"
          placeholderTextColor="#9ca3af"
        />
      </View>

      {/* Password */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password</Text>

        <View style={styles.passwordWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#9ca3af"
            secureTextEntry={!showPassword}
          />

          <Pressable
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eye}
          >
            <MaterialCommunityIcons
              name={showPassword ? "eye" : "eye-off"}
              size={22}
              color="#9ca3af"
            />
          </Pressable>
        </View>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Modal */}
        <ForgotPasswordModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.forgot}>No tengo cuenta</Text>
        </TouchableOpacity>
      </View>

      {/* Sign in button */}
      <TouchableOpacity style={styles.sign}>
        <Text style={styles.signText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    padding: 24,
    backgroundColor: "#fdfdfd",
  },
  title: {
    fontFamily: "Marimpa",
    fontSize: 30,
    color: "#080808",
    textAlign: "center",
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    color: "#9ca3af",
    marginLeft: 13,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#513751",
    borderRadius: 50,
    padding: 12,
    paddingRight: 44, // espacio para el ojo
    color: "#080808",
  },
  passwordWrapper: {
    position: "relative",
  },
  eye: {
    position: "absolute",
    right: 16,
    top: "50%",
    transform: [{ translateY: -11 }],
  },
  forgot: {
    color: "#c66f80",
    fontSize: 12,
    marginTop: 8,
    textAlign: "right",
  },
  sign: {
    backgroundColor: "#c66f80",
    padding: 14,
    borderRadius: 50,
    marginTop: 16,
  },
  signText: {
    color: "#111827",
    textAlign: "center",
    fontFamily: "Montserrat",
  },
});
