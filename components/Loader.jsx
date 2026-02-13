import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

const images = [
  require("../assets/loader/1.png"),
  require("../assets/loader/2.png"),
  require("../assets/loader/3.png"),
  require("../assets/loader/4.png"),
  require("../assets/loader/5.png"),
  require("../assets/loader/6.png"),
  require("../assets/loader/7.png"),
  require("../assets/loader/8.png"),
  require("../assets/loader/9.png"),
  require("../assets/loader/10.png"),
  require("../assets/loader/11.png"),
  require("../assets/loader/12.png"),
  require("../assets/loader/13.png"),
  require("../assets/loader/14.png"),
  require("../assets/loader/15.png"),
  require("../assets/loader/16.png"),
  require("../assets/loader/17.png"),
  require("../assets/loader/18.png"),
  require("../assets/loader/19.png"),
];

const ImageLoader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 200); // Cambia cada 0.5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={[styles.container, styles.overlay]}>
      <Image source={images[index]} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,      
    height: 100,     
    resizeMode: "contain",
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)', // Fondo translucido
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImageLoader;
