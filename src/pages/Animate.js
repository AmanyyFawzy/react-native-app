
import { transform } from "@babel/core";
import React, { useRef ,useState} from "react";
import { StyleSheet, View, Text, Animated, TouchableOpacity,Pressable } from "react-native";

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
        toValue:30,
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
        toValue: -50,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();

  return (
    <View style={styles.container}>
      <View style={styles.viewsContainer}>
        <Animated.View style={[
          styles.view1,
          {
            opacity: opacity1,
            transform: [
              { translateX },
              { scale },
             
            ],
          }
        ]}>
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

      <Animated.View style={[
        styles.welcomeText,
        {
          opacity: opacity3,
          transform: [{ translateY }],
        }
      ]}>
        <Text style={styles.text3}>Welcome</Text>
        <Text style={styles.text4}>Experience the future of mobile design</Text>
      
   <Pressable
  onHoverIn={() => setHovered(true)}
  onHoverOut={() => setHovered(false)}
  style={[
    styles.button,
    hovered && {
      backgroundColor: 'white',
      borderColor: 'black',
     
    },
  ]}
>
  <Text
    style={[
      styles.buttonText,
      hovered && {
        color: 'blue',
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
      backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    alignItems: "center",
    justifyContent: "center"
  },
   hovered: {
    backgroundColor: 'white',
    borderColor: 'black',
   transform: [{ translateY: -10 }],
   
   
  },
    hoveredText: {
    color: 'blue', 
  },
  view1: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: 'white',
    backgroundColor: 'yellow',
    marginRight: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text1: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white'
  },
  view2: {
    backgroundColor: "#f7f7f7",
    width: 100,
    height: 30,
    borderRadius: 20,
    marginTop: 30,
   
    marginRight:50
  },
  text2: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#667eea',
  },
  viewsContainer: {
    flexDirection: 'row',
    gap: 20
  },
  button: {
    width: 160,
    backgroundColor: 'rgb(255 255 255 / 20%)',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
    borderWidth:1,
    borderColor:'black'
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  welcomeText: {
    marginTop: 60,
    alignItems: 'center',
  },
  text3:{
    color:'white',
    fontSize:25,
    fontWeight:700,
    marginBottom:15
  },
  text4:{
 marginBottom:15,
   color:'white',
    fontSize:20,
  }
});
