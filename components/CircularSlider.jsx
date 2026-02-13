import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  PanResponder,
  Text,
  Pressable,
} from "react-native";
import Svg, { Circle } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import AddIcon from "../components/icons/AddIcon";

export default function CircularSlider({ onAddPress }) {
  const navigation = useNavigation();

  const size = 300;
  const strokeWidth = 30;
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;

  const [angle, setAngle] = useState(0);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt) => {
      const { locationX, locationY } = evt.nativeEvent;
      const dx = locationX - center;
      const dy = locationY - center;
      const newAngle = Math.atan2(dy, dx);
      setAngle(newAngle);
    },
  });

  const x = center + radius * Math.cos(angle);
  const y = center + radius * Math.sin(angle);

  const today = new Date().toLocaleDateString("es-ES");

  return (
    <View style={styles.container}>
      <View
        {...panResponder.panHandlers}
        style={{ width: size, height: size }}
      >
        {/* Donut */}
        <Svg width={size} height={size}>
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke="#fcebf1"
            strokeWidth={strokeWidth}
            fill="none"
          />
        </Svg>

        {/* CONTENIDO CENTRAL */}
        <View
          style={[
            styles.innerCircle,
            {
              width: radius * 1.4,
              height: radius * 1.4,
              borderRadius: (radius * 1.4) / 2,
              top: center - (radius * 1.4) / 2,
              left: center - (radius * 1.4) / 2,
            },
          ]}
        >
          <Text style={styles.date}>{today}</Text>
          <Text style={styles.phase}>Fase del ciclo</Text>

          <Pressable
            style={styles.addButton}
            onPress={onAddPress}
          >
            <AddIcon size={40} width={28} height={28} />
          </Pressable>
        </View>

        {/* CÍRCULO MOVIBLE */}
        <View
          style={[
            styles.movableWrapper,
            {
              left: x - 30,
              top: y - 30,
            },
          ]}
        >
          <Image
            source={require("../assets/loader/1.png")}
            style={styles.movableImage}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    position: "absolute",
    backgroundColor: "#fcebf1",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 30,
  },
  date: {
    fontFamily: "Montserrat",
    fontSize: 14,
    marginBottom: 4,
    color: "#080808",
  },
  phase: {
    fontFamily: "Montserrat",
    fontSize: 18,
    marginBottom: 10,
    color: "#c66f80",
    textAlign: "center",
  },
  addButton: {
    padding: 8,
    borderRadius: 50,
    tintColor: "#c66f80",
  },
  movableWrapper: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#f4c7d0",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  movableImage: {
    width: 50,
    height: 50,
  },
});
3