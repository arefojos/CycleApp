import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Modal,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import CircularSlider from '../components/CircularSlider';

export default function CycleScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* --- Header --- */}
      <View style={styles.header}>
        <Image
          source={require('../assets/loader/1.png')}
          style={styles.headerImage}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>Fase Menstrual</Text>
      </View>

      {/* --- CircularSlider centrado --- */}
      <View style={styles.sliderWrapper}>
        <CircularSlider onAddPress={() => navigation.navigate("DailyForm")} />

        {/* --- Botón debajo del slider --- */}
        <Pressable style={styles.infoButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.infoButtonText}>Conocer más sobre esta fase</Text>
        </Pressable>
      </View>

      {/* --- Modal Pop-up --- */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView>
              <Text style={styles.modalTitle}>Información sobre la Fase Menstrual</Text>
              <Text style={styles.modalText}>
                Aquí irán las informaciones sobre esta fase del ciclo.
                En el futuro cambiará según el día.
              </Text>
            </ScrollView>

            <Pressable
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseButtonText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80, // mayor margen superior
    marginBottom: 20,
  },
  headerImage: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'Montserrat',
    color: '#c66f80',
  },
  sliderWrapper: {
    flex: 1, // ocupa todo el espacio restante
    //justifyContent: 'center',
    //alignItems: 'center',
    marginTop:150,
  },
  infoButton: {
    marginTop: 60,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  infoButtonText: {
    color: '#c66f80',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    flex:1,
    width: '85%',
    maxHeight: '70%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'Montserrat',
    marginBottom: 12,
    color: '#c66f80',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: '#080808',
  },
  modalCloseButton: {
    marginTop: 16,
    backgroundColor: '#c66f80',
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  modalCloseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Montserrat',
  },
});

