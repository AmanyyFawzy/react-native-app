import React from "react";
import { StyleSheet, View } from "react-native";

export default function DividerComponent() {
  return (
    <>
      <View style={styles.divider}></View>
    </>
  );
}

const styles = StyleSheet.create({
  divider: {
    backgroundColor: "#1f1e1e70",
    height:7,
    width:'90%',
    borderRadius:50,
    marginVertical:10
  },
});
