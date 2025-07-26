
import React from 'react'
import { View,Text } from 'react-native-web'

export default function Home() {
  return (
   <View style={styles.container}>
    <Text style={styles.title}>
        welcome to my native App
    </Text>
   </View>
  )
}
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background:'#1B3C53',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    letterSpacing: 1,
  }
};
