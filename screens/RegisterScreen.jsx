import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import RegisterComponent from '../components/RegisterComponent';
import LogoComponent from '../components/LogoComponent';

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <RegisterComponent navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center'},
});