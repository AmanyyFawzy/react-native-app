import { View, Text, StyleSheet } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function ExtraSkills() {
  const extraSkills = [
    { icon: <AntDesign name="rocket1" size={20} color="black" />, text: "Bootstrap, React Bootstrap" },
    { icon: <FontAwesome6 name="flutter" size={20} color="black" />, text: "Flutter, Flutter-Awesome" },
    { icon: <FontAwesome5 name="react" size={22} color="black" />, text: "ReactJS" },
    { icon: <AntDesign name="github" size={20} color="black" />, text: "Git - GitHub" },
  ];

  return (
    <View style={styles.PersonalInfo}>
      <Text style={styles.header}>Extra Skills</Text>
      {extraSkills.map((item, index) => (
        <View style={styles.infoBox} key={index}>
          <Text style={styles.infoTitle}>
            {item.icon} {item.text}
          </Text>
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
  infoBox: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  infoTitle: {
    fontWeight: "600",
    fontSize: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 15,
  },
});
