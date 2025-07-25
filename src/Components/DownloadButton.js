import { TouchableOpacity, Text, StyleSheet, Linking, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function DownloadButton() {
  const handleDownload = () => {
    Linking.openURL(
      "https://lmu.edu.ng/XownCMS/cv/FALADE_SUNDAY_A.%20CV.pdf"
    );
  };

  return (
    <TouchableOpacity style={styles.btn} onPress={handleDownload}>
      <View style={styles.btnContent}>
        <FontAwesome name="download" size={18} color="white" style={styles.icon} />
        <Text style={styles.textBtn}>Download CV</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#1B3C53",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginBottom: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
  },
  btnContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 8,
  },
  textBtn: {
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 0.8,
    fontSize: 16,
  },
});
