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
import { useNavigation } from "@react-navigation/native";
import NextIcon from "../components/icons/NextIcon";
import ReturnIcon from "../components/icons/ReturnIcon";

export default function DailyFormScreen() {
  const navigation = useNavigation();

  {
    /*PERIODO*/
  }
  const PERIODO = {
    Ligero: require("../assets/ligero.png"),
    Moderado: require("../assets/moderado.png"),
    Fuerte: require("../assets/fuerte.png"),
    Intenso: require("../assets/intenso.png"),
    "Manchado rojo": require("../assets/rojo.png"),
    "Manchado marrón": require("../assets/marron.png"),
  };

  const [periodo, setPeriodo] = useState({
    Ligero: false,
    Moderado: false,
    Fuerte: false,
    Intenso: false,
    "Manchado rojo": false,
    "Manchado marrón": false,
  });

  const togglePeriodo = (key) => {
    setPeriodo({ ...periodo, [key]: !periodo[key] });
  };

  {
    /*SENTIMIENTOS*/
  }
  const SENTIMIENTOS = {
    "Cambios de ánimo": require("../assets/cambios.png"),
    "Sin control ": require("../assets/sin_control.png"),
    Bien: require("../assets/bien.png"),
    Feliz: require("../assets/feliz.png"),
    Triste: require("../assets/triste.png"),
    Sensible: require("../assets/sensible.png"),
    Segura: require("../assets/segura.png"),
    "Entusiasmada ": require("../assets/entusiasmada.png"),
    Irritable: require("../assets/irritable.png"),
    Ansiedad: require("../assets/ansiedad.png"),
  };

  const [sentimientos, setSentimientos] = useState({
    "Cambios de ánimo": false,
    "Sin control ": false,
    Bien: false,
    Feliz: false,
    Triste: false,
    Sensible: false,
    Segura: false,
    "Entusiasmada ": false,
    Irritable: false,
    Ansiedad: false,
  });

  const toggleSentimientos = (key) => {
    setSentimientos({ ...sentimientos, [key]: !sentimientos[key] });
  };

  {
    /*DOLOR*/
  }
  const DOLOR = {
    Cólicos: require("../assets/colicos.png"),
    Ovulación: require("../assets/ovulacion.png"),
    "Sensibilidad en los senos": require("../assets/sensibilidad_senos.png"),
    "Dolor de cabeza": require("../assets/dolor_cabeza.png"),
    "Dolor de lumbares": require("../assets/dolor_lumbares.png"),
    "Dolor vulvar": require("../assets/dolor_vulvar.png"),
  };

  const [dolor, setDolor] = useState({
    Cólicos: false,
    Ovulación: false,
    "Sensibilidad en los senos": false,
    "Dolor de cabeza": false,
    "Dolor de lumbares": false,
    "Dolor vulvar": false,
  });

  const toggleDolor = (key) => {
    setDolor({ ...dolor, [key]: !dolor[key] });
  };

  {
    /*AÑADIR HORAS DE NUEÑO INTEGER*/
  }
  const [horasSueno, setHorasSueno] = useState("");

  {
    /*CALIDAD DEL SUEÑO*/
  }
  const CALIDAD_SUENO = {
    "Dificultad para dormir": require("../assets/dificultad_para_dormir.png"),
    "Sueño sin descanso": require("../assets/sueno_sin_descanso.png"),
  };

  const [calidadSueno, setCalidadSueno] = useState({
    "Dificultad para dormir": false,
    "Sueño sin descanso": false,
  });

  const toggleCalidadSueno = (key) => {
    setCalidadSueno({ ...calidadSueno, [key]: !calidadSueno[key] });
  };

  {
    /*VIDA SEXUAL*/
  }
  const VIDA_SEXUAL = {
    "Deseo sexual alto": require("../assets/deseo_sexual_alto.png"),
    "Coito doloroso": require("../assets/coito_doloroso.png"),
  };

  const [vidaSexual, setVidaSexual] = useState({
    "Deseo sexual alto": false,
    "Coito doloroso": false,
  });

  const toggleVidaSexual = (key) => {
    setVidaSexual({ ...vidaSexual, [key]: !vidaSexual[key] });
  };

  {
    /*ENERGÍA*/
  }
  const ENERGIA = {
    Agotada: require("../assets/agotada.png"),
    Cansada: require("../assets/cansada.png"),
    Vitalidad: require("../assets/vitalidad.png"),
    "Alto rendimiento": require("../assets/alto_rendimiento.png"),
  };

  const [energia, setEnergia] = useState({
    Agotada: false,
    Cansada: false,
    Vitalidad: false,
    "Alto rendimiento": false,
  });

  const toggleEnergia = (key) => {
    setEnergia({ ...energia, [key]: !energia[key] });
  };

  {
    /*AÑADIR SPM BOOLEAN */
  }
  const SPM = {
    SPM: require("../assets/spm.png"),
  };

  const [spm, setSpm] = useState({
    SPM: false,
  });

  const toggleSpm = (key) => {
    setSpm({ ...spm, [key]: !spm[key] });
  };

  {
    /*MENTE*/
  }
  const MENTE = {
    "Niebla mental": require("../assets/niebla_mental.png"),
    Concentrada: require("../assets/concentrada.png"),
    Estresada: require("../assets/estresada.png"),
    Distraída: require("../assets/distraida.png"),
    Motivada: require("../assets/motivada.png"),
  };

  const [mente, setMente] = useState({
    "Niebla mental": false,
    Concentrada: false,
    Estresada: false,
    Distraída: false,
    Motivada: false,
  });

  const toggleMente = (key) => {
    setMente({ ...mente, [key]: !mente[key] });
  };

  {
    /*VIDA SOCIAL*/
  }
  const VIDA_SOCIAL = {
    Sociable: require("../assets/sociable.png"),
    Introvertida: require("../assets/introvertida.png"),
    Conflictiva: require("../assets/conflictiva.png"),
  };

  const [vidaSocial, setVidaSocial] = useState({
    Sociable: false,
    Introvertida: false,
    Conflictiva: false,
  });

  const toggleVidaSocial = (key) => {
    setVidaSocial({ ...vidaSocial, [key]: !vidaSocial[key] });
  };

  {
    /*ANTOJOS*/
  }
  const ANTOJOS = {
    Dulce: require("../assets/dulce.png"),
    Salado: require("../assets/salado.png"),
    Carbohidratos: require("../assets/carbohidratos.png"),
  };

  const [antojos, setAntojos] = useState({
    Dulce: false,
    Salado: false,
    Carbohidratos: false,
  });

  const toggleAntojos = (key) => {
    setAntojos({ ...antojos, [key]: !antojos[key] });
  };

  {
    /*SECRECIÓN*/
  }
  const SECRECION = {
    "Clara de huevo": require("../assets/clara_de_huevo.png"),
  };

  const [secrecion, setSecrecion] = useState({
    "Clara de huevo": false,
  });

  const toggleSecrecion = (key) => {
    setSecrecion({ ...secrecion, [key]: !secrecion[key] });
  };

  {
    /*PIEL Y PELO*/
  }
  const PIEL_PELO = {
    Acné: require("../assets/acne.png"),
    Grasa: require("../assets/grasa.png"),
    "Cuero cabelludo graso": require("../assets/cuero_cabelludo_graso.png"),
  };

  const [pielPelo, setPielPelo] = useState({
    Acné: false,
    Grasa: false,
    "Cuero cabelludo graso": false,
  });

  const togglePielPelo = (key) => {
    setPielPelo({ ...pielPelo, [key]: !pielPelo[key] });
  };

  {
    /*AÑADIR PESO INTEGER*/
  }
  const [peso, setPeso] = useState("");

  {
    /*AÑADIR DIGESTIÓN*/
  }
  const DIGESTION = {
    Hinchazón: require("../assets/hinchazon.png"),
    Gases: require("../assets/gases.png"),
    Extreñimiento: require("../assets/extrenimiento.png"),
  };

  const [digestion, setDigestion] = useState({
    Hinchazón: false,
    Gases: false,
    Extreñimiento: false,
  });

  const toggleDigestion = (key) => {
    setDigestion({ ...digestion, [key]: !digestion[key] });
  };

  const handleSubmit = () => {
    const formData = {
      periodo,
    };
    console.log("Formulario enviado:", formData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        {/* Botón izquierdo: día anterior */}
        <Pressable onPress={() => navigation.navigate("DailyForm")}>
          <ReturnIcon size={28} color="#c66f80" />
        </Pressable>

        <Text style={styles.title}>Formulario *HOY*</Text>

        {/* Botón derecho: día siguiente */}
        <Pressable onPress={() => navigation.navigate("DailyForm")}>
          <NextIcon size={28} color="#c66f80" />
        </Pressable>
      </View>

      {/* Periodo */}
      <Text style={styles.sectionTitle}>Sangrado</Text>

      <View style={styles.symptomsContainer}>
        {Object.keys(PERIODO).map((key) => {
          const selected = periodo[key];

          return (
            <Pressable
              key={key}
              onPress={() => togglePeriodo(key)}
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
                  source={PERIODO[key]}
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

      {/* SENTIMIENTOS */}
      <Text style={styles.sectionTitle}>Sentimientos</Text>

      <View style={styles.symptomsContainer}>
        {Object.keys(SENTIMIENTOS).map((key) => {
          const selected = sentimientos[key];

          return (
            <Pressable
              key={key}
              onPress={() => toggleSentimientos(key)}
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
                  source={SENTIMIENTOS[key]}
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

      {/* DOLOR */}
      <Text style={styles.sectionTitle}>Dolor</Text>

      <View style={styles.symptomsContainer}>
        {Object.keys(DOLOR).map((key) => {
          const selected = dolor[key];
          return (
            <Pressable
              key={key}
              onPress={() => toggleDolor(key)}
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
                  source={DOLOR[key]}
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

      {/*AÑADIR HORAS DE NUEÑO INTEGER*/}
      <Text style={styles.sectionTitle}>Horas de sueño</Text>
      <TextInput
        placeholder="Ej: 5"
        value={horasSueno}
        onChangeText={setHorasSueno}
        keyboardType="numeric"
        underlineStyle={{ display: "none" }}
        style={[styles.input, styles.inputContainer]}
      />

      {/* CALIDAD DEL SUEÑO */}
      <Text style={styles.sectionTitle}>Calidad del sueño</Text>

      <View style={styles.symptomsContainer}>
        {Object.keys(CALIDAD_SUENO).map((key) => {
          const selected = calidadSueno[key];

          return (
            <Pressable
              key={key}
              onPress={() => toggleCalidadSueno(key)}
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
                  source={CALIDAD_SUENO[key]}
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

      {/* VIDA SEXUAL */}
      <Text style={styles.sectionTitle}>Vida sexual</Text>

      <View style={styles.symptomsContainer}>
        {Object.keys(VIDA_SEXUAL).map((key) => {
          const selected = vidaSexual[key];

          return (
            <Pressable
              key={key}
              onPress={() => toggleVidaSexual(key)}
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
                  source={VIDA_SEXUAL[key]}
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

      {/* ENERGIA */}
      <Text style={styles.sectionTitle}>Energía</Text>

      <View style={styles.symptomsContainer}>
        {Object.keys(ENERGIA).map((key) => {
          const selected = energia[key];
          return (
            <Pressable
              key={key}
              onPress={() => toggleEnergia(key)}
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
                  source={ENERGIA[key]}
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

      {/*AÑADIR SPM BOOLEAN*/}
      <Text style={styles.sectionTitle}>SPM</Text>
      <View style={styles.symptomsContainer}>
        {Object.keys(SPM).map((key) => {
          const selected = spm[key];

          return (
            <Pressable
              key={key}
              onPress={() => toggleSpm(key)}
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
                  source={SPM[key]}
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

      {/* MENTE */}
      <Text style={styles.sectionTitle}>Mente</Text>

      <View style={styles.symptomsContainer}>
        {Object.keys(MENTE).map((key) => {
          const selected = mente[key];

          return (
            <Pressable
              key={key}
              onPress={() => toggleMente(key)}
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
                  source={MENTE[key]}
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

      {/* VIDA SOCIAL */}
      <Text style={styles.sectionTitle}>Vida Social</Text>

      <View style={styles.symptomsContainer}>
        {Object.keys(VIDA_SOCIAL).map((key) => {
          const selected = vidaSocial[key];

          return (
            <Pressable
              key={key}
              onPress={() => toggleVidaSocial(key)}
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
                  source={VIDA_SOCIAL[key]}
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

      {/* ANTOJOS */}
      <Text style={styles.sectionTitle}>Sangrado</Text>

      <View style={styles.symptomsContainer}>
        {Object.keys(ANTOJOS).map((key) => {
          const selected = antojos[key];

          return (
            <Pressable
              key={key}
              onPress={() => toggleAntojos(key)}
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
                  source={ANTOJOS[key]}
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

      {/* SECRECIÓN */}
      <Text style={styles.sectionTitle}>Secreción</Text>

      <View style={styles.symptomsContainer}>
        {Object.keys(SECRECION).map((key) => {
          const selected = secrecion[key];

          return (
            <Pressable
              key={key}
              onPress={() => toggleSecrecion(key)}
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
                  source={SECRECION[key]}
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

      {/* PIEL Y PELO */}
      <Text style={styles.sectionTitle}>Piel y Pelo</Text>

      <View style={styles.symptomsContainer}>
        {Object.keys(PIEL_PELO).map((key) => {
          const selected = pielPelo[key];

          return (
            <Pressable
              key={key}
              onPress={() => togglePielPelo(key)}
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
                  source={PIEL_PELO[key]}
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

      {/*AÑADIR PESO INTEGER*/}
      <Text style={styles.sectionTitle}>Peso</Text>
      <TextInput
        placeholder="Ej: 5"
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
        underlineStyle={{ display: "none" }}
        style={[styles.input, styles.inputContainer]}
      />

      {/* DIGESTIÓN */}
      <Text style={styles.sectionTitle}>Digestión</Text>

      <View style={styles.symptomsContainer}>
        {Object.keys(DIGESTION).map((key) => {
          const selected = digestion[key];

          return (
            <Pressable
              key={key}
              onPress={() => toggleDigestion(key)}
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
                  source={DIGESTION[key]}
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
        Guardar Datos
      </Button>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: "Marimpa",
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
    fontFamily: "Marimpa",
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
  header: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 16,
  paddingHorizontal: 10,
  marginTop: 10, // opcional, para separarlo de la barra superior
},
});
