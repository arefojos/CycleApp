import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
    ScrollView,
} from "react-native";
import SetRow from "./SetRow";

const ExerciseComponent = ({ exercise, onUpdate, onDelete }) => {
  const [name, setName] = useState(exercise.name);
  const [numSeries, setNumSeries] = useState(exercise.sets.length || 1);
  const [sets, setSets] = useState(
    exercise.sets.length > 0
      ? exercise.sets
      : [{ weight: "", reps: "", feeling: "neutral" }],
  );
  const [notes, setNotes] = useState(exercise.notes || "");

  useEffect(() => {
    if (numSeries > sets.length) {
      const extra = Array.from({ length: numSeries - sets.length }, () => ({
        weight: "",
        reps: "",
        feeling: "neutral",
      }));
      setSets([...sets, ...extra]);
    } else if (numSeries < sets.length) {
      setSets(sets.slice(0, numSeries));
    }
  }, [numSeries]);

  useEffect(() => {
    onUpdate({
      ...exercise,
      name,
      sets,
      notes,
    });
  }, [name, sets, notes]);

  const totalReps = sets.reduce((acc, s) => acc + Number(s.reps || 0), 0);
  const [numSeriesInput, setNumSeriesInput] = useState(
    exercise.sets.length.toString(),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nameText}>{exercise.name}</Text>
        <TouchableOpacity onPress={() => onDelete && onDelete(exercise.id)}>
          <Text style={styles.deleteBtn}>✖️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Text>Total series: {sets.length}</Text>
        <Text>Total repeticiones: {totalReps}</Text>
      </View>
      <View style={styles.row}>
        <Text>Número de series:</Text>
        <TextInput
          style={styles.seriesInput}
          value={numSeriesInput}
          keyboardType="numeric"
          onChangeText={(val) => {
            if (/^\d*$/.test(val)) {
              setNumSeriesInput(val); 
              const num = Number(val);
              if (num > 0) setNumSeries(num); 
            }
          }}
        />
      </View>

      <ScrollView horizontal={true} style={styles.horizontalScroll}>
        <View>
          <SetRow type="weight" sets={sets} onChange={setSets} />
          <SetRow type="reps" sets={sets} onChange={setSets} />
          <SetRow type="feeling" sets={sets} onChange={setSets} />
        </View>
      </ScrollView>

      <TextInput
        style={styles.notes}
        placeholder="Observaciones"
        value={notes}
        multiline
        onChangeText={setNotes}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  nameInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
  },
  deleteBtn: { marginLeft: 10, fontSize: 18, color: "red" },
  nameInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    alignItems: "center",
  },
  seriesInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 5,
    width: 50,
    textAlign: "center",
  },
  notes: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginTop: 5,
  },
});

export default ExerciseComponent;
