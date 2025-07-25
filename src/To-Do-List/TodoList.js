import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-web";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem("tasks");
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.error("Error loading tasks:", error);
    }
  };

  const saveTasks = async (updatedTasks) => {
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(updatedTasks));
    } catch (error) {
      console.error("Error saving tasks:", error);
    }
  };

  const addTask = () => {
    if (task.trim() === "") {
      Alert.alert("Error", "Task cannot be empty!");
      return;
    }
    const newTasks = [...tasks, { text: task, completed: false }];
    setTasks(newTasks);
    saveTasks(newTasks);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(tasks[index].text);
    setModalVisible(true);
  };

  const saveEdit = () => {
    if (editText.trim() === "") {
      Alert.alert("Error", "Task cannot be empty!");
      return;
    }
    const updatedTasks = [...tasks];
    updatedTasks[editIndex].text = editText;
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    setModalVisible(false);
  };

  const renderTask = ({ item, index }) => (
    <View style={styles.taskContainer}>
      <TouchableOpacity
        style={[styles.checkCircle, item.completed && styles.checkedCircle]}
        onPress={() => toggleComplete(index)}>
        {item.completed && <AntDesign name="check" size={16} color="white" />}
      </TouchableOpacity>
      <Text
        style={[
          styles.taskText,
          item.completed && {
            textDecorationLine: "line-through",
            color: "#999",
          },
        ]}
        onPress={() => startEdit(index)}>
        {item.text}
      </Text>
      <TouchableOpacity onPress={() => deleteTask(index)}>
        <Entypo name="trash" size={20} color="#a01e1eff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>All Tasks</Text>

        <ScrollView>
          {tasks.length === 0 ? (
            <Text style={styles.emptyText}>No tasks yet!</Text>
          ) : (
            tasks.map((item, index) => renderTask({ item, index }))
          )}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Create new task"
            value={task}
            onChangeText={setTask}
          />
          <TouchableOpacity style={styles.addButton} onPress={addTask}>
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Edit Modal */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Edit Task</Text>
            <TextInput
              style={styles.modalInput}
              value={editText}
              onChangeText={setEditText}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.saveButton} onPress={saveEdit}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.saveButton, { backgroundColor: "#b2bec3" }]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.saveButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0dedeff",
  },
  card: {
    flex: 1,
    margin: 20,
    borderRadius: 20,
    backgroundColor: "#fff",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1B3C53",
    textAlign: "center",
  },
  emptyText: { textAlign: "center", color: "#636e72", marginTop: 20 },
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomColor: "#dcdde1",
    borderBottomWidth: 1,
  },
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#1B3C53",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkedCircle: { backgroundColor: "#1B3C53" },
  taskText: { flex: 1, fontSize: 16, color: "#2d3436" },
  inputContainer: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#f1f2f6",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#1B3C53",
    padding: 12,
    borderRadius: 50,
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  modalInput: {
    backgroundColor: "#f1f2f6",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: { flexDirection: "row", justifyContent: "space-between" },
  saveButton: {
    backgroundColor: "#0984e3",
    padding: 10,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },
  saveButtonText: { color: "#fff", fontWeight: "bold" },
});
