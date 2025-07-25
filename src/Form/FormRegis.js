import { StatusBar } from "expo-status-bar";
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function FormRegis() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const Validation = () => {
    let valid = true;
    let newErrors = {};

    if (username.trim().length < 3) {
      newErrors.username = "Username must be more than 2 characters!";
      valid = false;
    }

    if (password.length < 8) {
      newErrors.password = "Password must be more than 8 characters!";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Email is not valid!";
      valid = false;
    }

    const PhoneRegex = /^01[0125][0-9]{8}$/;

    if (phone.length === 0) {
      newErrors.phone = "Phone number is required!";
      valid = false;
    } else if (!PhoneRegex.test(phone)) {
      newErrors.phone = "Enter a valid phone number !";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (Validation()) {
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Form</Text>

      {/* Username */}
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
      />
      {errors.username && (
        <Text style={styles.errorText}>{errors.username}</Text>
      )}

      {/* Password + Show/Hide Icon */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color="#0984e3"
          />
        </TouchableOpacity>
      </View>
      {errors.password && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )}

      {/* Email */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

      {/* Phone */}
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        keyboardType="numeric"
        value={phone}
        onChangeText={setPhone}
      />
      {errors.phone && <Text style={styles.errorText}>{errors.phone}</Text>}

      {/* Submit button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Your Information</Text>
            <Text>Username: {username}</Text>
            <Text>Email: {email}</Text>
            <Text>Phone: {phone}</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2f3640",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dcdde1",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#dcdde1",
    marginBottom: 10,
  },
  inputField: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#1B3C53",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  errorText: {
    color: "#a11919",
    paddingBottom: 5,
    alignSelf: "flex-start",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 30,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
});
