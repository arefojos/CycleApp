import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

export default function LogoComponent() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/loader/18.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',  
    justifyContent: 'flex-start', 
    marginTop: '50%',  
  },
  logo: {
    width: 100,   
    height: 100,  
  },
});
