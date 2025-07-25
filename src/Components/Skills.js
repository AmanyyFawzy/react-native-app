import { View, Text, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

export default function Skills() {
  const skills = [
    { name: "HTML", progress: 1 },
    { name: "CSS", progress: 0.9 },
    { name: "JavaScript", progress: 0.8 },
    { name: "React Native", progress: 0.5 },
  ];

  return (
    <View style={styles.PersonalInfo}>
      <Text style={styles.header}>Skills</Text>
      {skills.map((skill, index) => (
        <View style={styles.infoBox} key={index}>
          <Text style={styles.infoTitle}>{skill.name}</Text>
          <View style={styles.progressContainer}>
            <Progress.Bar
                progress={skill.progress}
                width={150}
                height={8}
                color="#1B3C53"
                borderRadius={10}
            />
          </View>
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
    justifyContent: "space-between",
  },
  infoTitle: {
    fontWeight: "600",
    fontSize: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 15,
  },
});
