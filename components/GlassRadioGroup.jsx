// components/GlassRadioGroup.jsx
import React, { useState, useRef } from 'react';
import { View, Text, Pressable, StyleSheet, Animated } from 'react-native';

const GlassRadioGroup = ({ options, selected: selectedProp, onSelect }) => {
  // Estado interno del botón seleccionado
  const [selected, setSelected] = useState(selectedProp ?? 0);
  const translateX = useRef(new Animated.Value(selected * 100)).current;

  const handlePress = (index) => {
    setSelected(index);

    // Animación del glider
    Animated.spring(translateX, {
      toValue: index * 100, // ancho del botón
      useNativeDriver: true,
    }).start();

    onSelect?.(options[index]);
  };

  return (
    <View style={styles.container}>
      {/* Glider animado */}
      <Animated.View
        style={[
          styles.glider,
          { transform: [{ translateX }] },
          { backgroundColor: '#c66f80' }, // color del glider activo
        ]}
      />

      {/* Botones */}
      {options.map((option, index) => {
        const isSelected = selected === index;
        return (
          <Pressable
            key={option}
            style={styles.button}
            onPress={() => handlePress(index)}
          >
            <Text style={[styles.label, isSelected && styles.labelSelected]}>
              {option}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'relative',
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.06)',
    overflow: 'hidden',
    width: 300, 
    height: 50,
  },
  glider: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 100, 
    borderRadius: 20,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#0f0f0f',
    fontSize: 14,
  },
  labelSelected: {
    color: '#f8f8f8',
  },
});

export default GlassRadioGroup;

