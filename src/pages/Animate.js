import React, { useRef, useState } from "react";
import { StyleSheet, View, Text, Animated, Pressable } from "react-native";

function Animate() {
  const [hovered, setHovered] = useState(false);
  const scale = useRef(new Animated.Value(0.5)).current;

  const translateY = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(-200)).current;
  const translateX2 = useRef(new Animated.Value(0)).current;
  const opacity1 = useRef(new Animated.Value(0)).current;
  const opacity2 = useRef(new Animated.Value(0)).current;
  const opacity3 = useRef(new Animated.Value(0)).current;

  Animated.sequence([
    Animated.timing(opacity1, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }),
    Animated.timing(translateX, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }),
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.2,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0.7,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]),
    Animated.sequence([
      Animated.timing(opacity2, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateX2, {
        toValue: 20,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]),
    Animated.timing(opacity3, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }),
    Animated.timing(translateY, {
      toValue: -40,
      duration: 1000,
      useNativeDriver: true,
    }),
  ]).start();

  return (
    <View style={styles.container}>
      <View style={styles.viewsContainer}>
        <Animated.View
          style={[
            styles.view1,
            {
              opacity: opacity1,
              transform: [{ translateX }, { scale }],
            },
          ]}
        >
          <Text style={styles.text1}>LOGO</Text>
        </Animated.View>

        <Animated.View
          style={[
            styles.view2,
            {
              opacity: opacity2,
              transform: [{ translateX: translateX2 }],
            },
          ]}
        >
          <Text style={styles.text2}>BRAND</Text>
        </Animated.View>
      </View>

      <Animated.View
        style={[
          styles.welcomeText,
          {
            opacity: opacity3,
            transform: [{ translateY }],
          },
        ]}
      >
        <Text style={styles.text3}>Welcome</Text>
        <Text style={styles.text4}>Experience the future of mobile design</Text>

        <Pressable
          onHoverIn={() => setHovered(true)}
          onHoverOut={() => setHovered(false)}
          style={[
            styles.button,
            hovered && {
              backgroundColor: "#fff",
              borderColor: "#9b5dadff",
            },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              hovered && {
                color: "#1e3c72",
              },
            ]}
          >
            Get Started
          </Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

export default Animate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#703681ff", 
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  viewsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10, 
  },
  view1: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#ff9800",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  text1: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  view2: {
    backgroundColor: "#9b5dadff",
    paddingHorizontal: 18,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
  text2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  welcomeText: {
    marginTop: 50,
    alignItems: "center",
  },
  text3: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textTransform: "uppercase",
  },
  text4: {
    color: "#dcdcdc",
    fontSize: 16,
    textAlign: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    width: 180,
    backgroundColor: "#9b5dadff",
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#9b5dadff",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
});
