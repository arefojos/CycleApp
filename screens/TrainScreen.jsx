// screens/TrainScreen.jsx
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import ExerciseComponent from "../components/exercise/ExerciseComponent";
import AddIcon from "../components/icons/AddIcon";
import ReturnIcon from "../components/icons/ReturnIcon";
import NextIcon from "../components/icons/NextIcon";
import SelectExerciseModal from "../components/exercise/SelectExerciseModal";

const TrainScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [exercises, setExercises] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const updateExercise = (id, updatedExercise) => {
    setExercises((prev) =>
      prev.map((ex) => (ex.id === id ? updatedExercise : ex)),
    );
  };

  const addExercise = () => {
    setExercises((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        name: "",
        sets: [{ weight: "", reps: "", feeling: "neutral" }],
        notes: "",
      },
    ]);
  };

  const changeDate = (days) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + days);
    setSelectedDate(newDate);
    setExercises([]); // Por ahora limpiamos, luego puedes cargar datos reales
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("es-ES", {
      weekday: "short",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const addExerciseFromModal = (exerciseName) => {
    setExercises((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        name: exerciseName,
        sets: [{ weight: "", reps: "", feeling: "neutral" }],
        notes: "",
      },
    ]);
  };

  const exercisesDB = [
    { id: "1", name: "Sentadilla" },
    { id: "2", name: "Press de banca" },
    { id: "3", name: "Peso muerto" },
    { id: "4", name: "Curl bíceps" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => changeDate(-1)}>
          <ReturnIcon />
        </TouchableOpacity>
        <Text style={styles.dateText}>{formatDate(selectedDate)}</Text>
        <TouchableOpacity onPress={() => changeDate(1)}>
          <NextIcon />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scroll}>
        {exercises.map((exercise) => (
          <ExerciseComponent
            key={exercise.id}
            exercise={exercise}
            onUpdate={(updated) => updateExercise(exercise.id, updated)}
            onDelete={(id) => {
              setExercises((prev) => prev.filter((ex) => ex.id !== id));
            }}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => setModalVisible(true)}
      >
        <AddIcon size={50} />
      </TouchableOpacity>

      {/* --- Aquí se renderiza el modal --- */}
      <SelectExerciseModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={addExerciseFromModal}
        exercisesDB={exercisesDB}
      />
      <View style={{ height: 100 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 50,
  },
  dateText: { fontSize: 16, fontWeight: "bold" },
  scroll: { flex: 1 },
  addBtn: { position: "absolute", bottom: 120, right: 25 },
});

export default TrainScreen;
