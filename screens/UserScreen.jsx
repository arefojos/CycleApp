import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const UserScreen = ({ userData }) => {
  const {
    nombre = "Andrea",
    edad = 25,
    peso = 60,
    altura = 165,
    duracionCiclo = 28,
    duracionMenstruacion = 5,
  } = userData || {};

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* ------------------ Info Usuario ------------------ */}
      <View style={styles.userInfo}>
        <Image
          source={require("../assets/foto_usuario.png")} // reemplaza con la foto real
          style={styles.avatar}
        />
        <View style={styles.userData}>
          <Text style={styles.name}>{nombre}</Text>
          <Text>{edad} años</Text>
          <Text>{peso} kg</Text>
          <Text>{altura} cm</Text>
        </View>
      </View>

      {/* ------------------ Datos del ciclo ------------------ */}
      <View style={styles.cycleInfo}>
        <Text style={styles.sectionTitle}>Datos ciclo:</Text>
        <Text>• Duración media: {duracionCiclo} días</Text>
        <Text>• Flujo: {duracionMenstruacion} días</Text>
      </View>

      {/* ------------------ Gráfico ------------------ */}
      <View style={styles.graphContainer}>
        <View style={styles.graphPlaceholder}>
          <Text style={{ color: "#999" }}>Aquí irá el gráfico</Text>
        </View>
      </View>

      {/* ------------------ Botón Generar PDF ------------------ */}
      <TouchableOpacity style={styles.pdfButton}>
        <Text style={styles.pdfButtonText}>Generar PDF</Text>
      </TouchableOpacity>

      {/* ------------------ Sugerencias y Ajustes ------------------ */}
      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("SuggestionScreen")}
        >
          <Text style={styles.actionText}>SUGERENCIAS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate("UserSettings")}
        >
          <Text style={styles.actionText}>AJUSTES</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
  },
  userInfo: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  userData: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cycleInfo: {
    backgroundColor: "#f2f2f2",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  graphContainer: {
    marginBottom: 20,
  },
  graphPlaceholder: {
    height: 200,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  pdfButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  pdfButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    flex: 0.48,
    backgroundColor: "#f2f2f2",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  actionText: {
    fontWeight: "bold",
  },
});

export default UserScreen;
