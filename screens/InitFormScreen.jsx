// screens/InitFormScreen.jsx
import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from "react-native";
import { TextInput, Button, Checkbox } from "react-native-paper";
import GlassRadioGroup from "../components/GlassRadioGroup";

export default function InitFormScreen() {
  const [sexo, setSexo] = useState("");
  const [pronombres, setPronombres] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [fechaUltimoSangrado, setFechaUltimoSangrado] = useState("");
  const [diasSangrado, setDiasSangrado] = useState("");
  const [duracionCiclo, setDuracionCiclo] = useState("");
  // arriba del archivo InitFormScreen.jsx
  const SINTOMAS = {
    Cólicos: require("../assets/colicos.png"),
    "Dolor lumbar": require("../assets/dolor_lumbares.png"),
    "Dolor vulvar": require("../assets/dolor_vulvar.png"),
    "Coito doloroso": require("../assets/coito_doloroso.png"),
  };

  const [sintomas, setSintomas] = useState({
    Cólicos: false,
    "Dolor lumbar": false,
    "Dolor vulvar": false,
    "Coito doloroso": false,
  });

  const toggleSintoma = (key) => {
    setSintomas({ ...sintomas, [key]: !sintomas[key] });
  };

  const handleSubmit = () => {
    const formData = {
      sexo,
      pronombres,
      fechaNacimiento,
      fechaUltimoSangrado,
      diasSangrado,
      duracionCiclo,
      sintomas,
    };
    console.log("Formulario enviado:", formData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Formulario de nuevo usuario</Text>
      {/* Sexo */}
      <Text style={styles.sectionTitle}>Sexo</Text>
      <GlassRadioGroup
        options={["Femenino", "Masculino", "Otro"]}
        selected={sexo}
        onSelect={setSexo}
      />

      {/* Pronombres */}
      <Text style={styles.sectionTitle}>Pronombres</Text>
      <GlassRadioGroup
        options={["Ella", "Él", "Elle"]}
        selected={pronombres}
        onSelect={setPronombres}
      />

      {/* Fecha de nacimiento */}
      <Text style={styles.sectionTitle}>Fecha de nacimiento</Text>
      <TextInput
        placeholder="DD/MM/AAAA"
        value={fechaNacimiento}
        onChangeText={setFechaNacimiento}
        underlineStyle={{ display: "none" }}
        style={[styles.input, styles.inputContainer]}
      />

      {/* Fecha del último sangrado */}
      <Text style={styles.sectionTitle}>Fecha del último sangrado</Text>
      <TextInput
        placeholder="DD/MM/AAAA"
        value={fechaUltimoSangrado}
        onChangeText={setFechaUltimoSangrado}
        underlineStyle={{ display: "none" }}
        style={[styles.input, styles.inputContainer]}
      />

      {/* Días de sangrado */}
      <Text style={styles.sectionTitle}>
        Número de días habituales de sangrado
      </Text>
      <TextInput
        placeholder="Ej: 5"
        value={diasSangrado}
        onChangeText={setDiasSangrado}
        keyboardType="numeric"
        underlineStyle={{ display: "none" }}
        style={[styles.input, styles.inputContainer]}
      />

      {/* Duración ciclo */}
      <Text style={styles.sectionTitle}>Duración habitual del ciclo</Text>
      <TextInput
        placeholder="Ej: 28"
        value={duracionCiclo}
        onChangeText={setDuracionCiclo}
        keyboardType="numeric"
        underlineStyle={{ display: "none" }}
        style={[styles.input, styles.inputContainer]}
      />

      {/* Síntomas */}
      <Text style={styles.sectionTitle}>Síntomas habituales</Text>

      <View style={styles.symptomsContainer}>
        {Object.keys(SINTOMAS).map((key) => {
          const selected = sintomas[key];

          return (
            <Pressable
              key={key}
              onPress={() => toggleSintoma(key)}
              style={[
                styles.symptomButton,
                selected && styles.symptomButtonSelected,
              ]}
            >
              <View
                style={[
                  styles.symptomCircle,
                  selected && styles.symptomCircleSelected,
                ]}
              >
                <Image
                  source={SINTOMAS[key]}
                  style={styles.symptomImage}
                  resizeMode="contain"
                />
              </View>

              <Text
                style={[
                  styles.symptomLabel,
                  selected && styles.symptomLabelSelected,
                ]}
              >
                {key}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Botón enviar */}
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.submitButton}
      >
        Registrarse
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Marimpa',
    marginTop: 16,
    marginBottom: 8,
  },
  inputContainer: {
    borderRadius: 50,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderWidth: 1,
    borderColor: "#f4c7d0",
    backgroundColor: "#fcebf1",

    marginBottom: 12,
    paddingHorizontal: 16,
  },
  input: {
    height: 40, // altura del input
    color: "#111827",
  },
  submitButton: {
    marginTop: 24,
    backgroundColor: "#c66f80",
  },
  title: {
    fontFamily: 'Marimpa',
    fontSize: 24,
    color: "#080808",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 30,
  },
  symptomsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    marginTop: 8,
  },

  symptomButton: {
    width: 90,
    alignItems: "center",
  },

  symptomCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#fcebf1",
    borderWidth: 2,
    borderColor: "#f4c7d0",
    justifyContent: "center",
    alignItems: "center",
  },

  symptomCircleSelected: {
    backgroundColor: "#c66f80",
    borderColor: "#c66f80",
  },

  symptomImage: {
    width: 60,
    height: 60,
  },

  symptomButtonSelected: {},

  symptomLabel: {
    marginTop: 6,
    fontSize: 12,
    textAlign: "center",
    color: "#6b7280",
  },

  symptomLabelSelected: {
    color: "#c66f80",
  },
});
