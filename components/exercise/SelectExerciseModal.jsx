import React, { useState, useEffect } from "react";
import { Modal, View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from "react-native";

const SelectExerciseModal = ({ visible, onClose, onSelect, exercisesDB }) => {
  const [search, setSearch] = useState("");
  const [filteredExercises, setFilteredExercises] = useState(exercisesDB);

  useEffect(() => {
    setFilteredExercises(
      exercisesDB.filter(ex => ex.name.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, exercisesDB]);

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <TextInput
            placeholder="Buscar ejercicio"
            style={styles.search}
            value={search}
            onChangeText={setSearch}
          />
          <FlatList
            data={filteredExercises}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  onSelect(item.name);
                  onClose();
                  setSearch("");
                }}
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Text style={{ color: "white" }}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: 10,
    maxHeight: "80%",
    padding: 15
  },
  search: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginBottom: 10
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#eee"
  },
  closeBtn: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "red",
    borderRadius: 5,
    alignItems: "center"
  }
});

export default SelectExerciseModal;
