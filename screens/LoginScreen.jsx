// screens/LoginScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Loader from '../components/Loader';
import LoginComponent from '../components/LoginComponent';
import LogoComponent from '../components/LogoComponent';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LoginComponent navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center'},
});