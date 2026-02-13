import React from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";

const feelings = {
  good: "✔️",
  neutral: "〽️",
  bad: "❌"
};

const SetRow = ({ type, sets, onChange }) => {
  
  const handleChange = (index, value) => {
    const newSets = [...sets];
    newSets[index][type] = type === "reps" || type === "weight" ? value.replace(/[^0-9]/g, '') : value;
    onChange(newSets);
  };

  return (
    <View style={styles.row}>
      <Text style={styles.label}>{type === "weight" ? "Peso" : type === "reps" ? "Reps" : "Sensación"}</Text>
      {sets.map((set, index) => (
        type !== "feeling" ? (
          <TextInput
            key={index}
            style={styles.input}
            value={set[type]?.toString()}
            keyboardType="numeric"
            onChangeText={(val) => handleChange(index, val)}
          />
        ) : (
          <TouchableOpacity
            key={index}
            style={styles.feelingBtn}
            onPress={() => {
              const next = set[type] === "good" ? "neutral" : set[type] === "neutral" ? "bad" : "good";
              handleChange(index, next);
            }}
          >
            <Text style={styles.feelingText}>{feelings[set[type] || "neutral"]}</Text>
          </TouchableOpacity>
        )
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  label: { width: 80, fontWeight: "bold" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: 50,
    height: 40,
    textAlign: "center",
    marginRight: 5,
    borderRadius: 5
  },
  feelingBtn: {
    width: 50,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 5,
    borderRadius: 5
  },
  feelingText: { fontSize: 18 }
});

export default SetRow;
