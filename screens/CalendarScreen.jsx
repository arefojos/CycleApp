import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Constantes
const WEEKDAYS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export default function CalendarScreen() {
  const navigation = useNavigation();
  const today = new Date();

  // Generar los 12 meses (mes anterior al actual hasta 11 posteriores)
  const monthsToShow = [];
  for (let i = -1; i < 11; i++) {
    const d = new Date(today.getFullYear(), today.getMonth() + i, 1);
    monthsToShow.push(d);
  }

  const handleDayPress = (day) => {
    navigation.navigate("DailyForm"); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ height: 25 }} />
      {monthsToShow.map((date, mi) => {
        const year = date.getFullYear();
        const month = date.getMonth();

        // Primer día del mes (0 = domingo)
        let firstDay = new Date(year, month, 1).getDay();
        firstDay = firstDay === 0 ? 6 : firstDay - 1; 

        // Número de días del mes
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Crear array de días con null al inicio para que la semana comience en lunes
        const days = Array(firstDay).fill(null);
        for (let d = 1; d <= daysInMonth; d++) {
          days.push(d);
        }

        // Añadir null al final para que total divisible por 7
        while (days.length % 7 !== 0) {
          days.push(null);
        }

        // Dividir en semanas
        const weeks = [];
        for (let i = 0; i < days.length; i += 7) {
          weeks.push(days.slice(i, i + 7));
        }

        return (
          <View key={mi} style={styles.monthContainer}>
            <Text style={styles.monthTitle}>
              {MONTHS[month]} {year}
            </Text>

            <View style={styles.weekHeader}>
              {WEEKDAYS.map((day) => (
                <Text key={day} style={styles.weekDayText}>
                  {day}
                </Text>
              ))}
            </View>

            <View style={styles.weeksContainer}>
              {weeks.map((week, wi) => (
                <View key={wi} style={styles.weekRow}>
                  {week.map((day, di) => (
                    <TouchableOpacity
                      key={di}
                      style={[
                        styles.dayButton,
                        !day && {
                          borderWidth: 0,
                          isToday: day === today.getDate() && month === today.getMonth() && year === today.getFullYear() ? { backgroundColor: "#c66f80" } : {backgroundColor: "transparent",},
                        }, 
                      ]}
                      onPress={() => day && handleDayPress(day)}
                      disabled={!day} // Los null no son clicables
                    >
                      {day && (
                        <>
                          <Text style={styles.dayNumber}>{day}</Text>
                          <Image
                            source={require("../assets/loader/1.png")}
                            style={styles.dayImage}
                            resizeMode="cover"
                          />
                        </>
                      )}
                    </TouchableOpacity>
                  ))}
                </View>
              ))}
            </View>
          </View>
        );
      })}
      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  monthContainer: {
    marginBottom: 30,
  },
  monthTitle: {
    fontFamily: 'Marimpa',
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  weekHeader: {
    flexDirection: "row",
  },
  weekDayText: {
    fontFamily: 'Montserrat',
    flex: 1,
    textAlign: "center",
    marginBottom: 5,
  },
  weeksContainer: {
    flexDirection: "column",
  },
  weekRow: {
    flexDirection: "row",
  },
  dayButton: {
    flex: 1,
    aspectRatio: 1,
    margin: 1, 
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#c66f80",
    borderRadius: 8,
    overflow: "hidden",
  },
  dayNumber: {
    position: "absolute",
    top: 2,
    right: 4,
    fontSize: 12,
    color: "#371f23",
  },
  dayImage: {
    width: "60%",
    height: "60%",
    borderRadius: 50,
  },
});
