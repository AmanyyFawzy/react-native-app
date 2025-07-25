
import { View, Text, StyleSheet } from "react-native";

export default function PersonalInfo() {
  const info = [
    { title: "Age:", value: "22" },
    { title: "Residence:", value: "Egypt" },
    { title: "Freelancer:", value: "available" },
    { title: "Address:", value: "Zagazig, Egypt" },
  ];

  return (
    <View style={styles.PersonalInfo}>
      {info.map((item, index) => (
        <View style={styles.infoBox} key={index}>
          <Text style={styles.infoTitle}>{item.title}</Text>
          <Text>{item.value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  PersonalInfo: {
    backgroundColor: "#1f1e1e70",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    rowGap: 10,
  },
  infoBox: { flexDirection: "row", justifyContent: "space-between" },
  infoTitle: { fontWeight: "600", fontSize: 16 },
});
