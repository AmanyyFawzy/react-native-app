import { View, Text, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

export default function LanguagesSkills() {
  const langs = [
    { name: "Arabic", progress: 1 },
    { name: "English", progress: 0.7 },
    { name: "French", progress: 0.1 },
  ];

  return (
    <View style={styles.PersonalInfo}>
      <Text style={styles.header}>Languages</Text>
      {langs.map((lang, index) => (
        <View style={styles.infoBox} key={index}>
          <Text style={styles.infoTitle}>{lang.name}</Text>
          <View style={styles.progressContainer}>
            <Progress.Bar
              progress={lang.progress}
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
  infoBox: { flexDirection: "row", justifyContent: "space-between" },
  infoTitle: { fontWeight: "600", fontSize: 16 },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 15,
  },
});
