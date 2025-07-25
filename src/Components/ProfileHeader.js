import { View, Text, Image, TouchableOpacity, Linking, StyleSheet } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/user-default.png")} style={styles.profileImg} />
      <Text style={styles.title}>Amany Fawzy</Text>
      <Text style={styles.subTitle}>Front End Developer</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={() => Linking.openURL("https://teams.microsoft.com/v2/")}>
          <FontAwesome5 name="facebook" size={30} color="#77BEF0" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/feed/")}>
          <FontAwesome name="linkedin-square" size={30} color="#3D74B6" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://github.com/")}>
          <FontAwesome name="github" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://www.google.com/?hl=ar")}>
          <AntDesign name="google" size={30} color="#EC5228" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", rowGap: 10 },
  profileImg: {
    backgroundColor: "#0101015a",
    width: 140,
    height: 140,
    borderRadius: 80,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: { color: "#000", fontSize: 25, fontWeight: "bold" },
  subTitle: { fontSize: 16 },
  iconsContainer: { flexDirection: "row", columnGap: 15, alignItems: "center" },
});
