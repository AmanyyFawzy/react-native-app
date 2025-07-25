import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/pages/Home";
import ListMovies from "./src/pages/ListMovies";
import { Provider } from "react-redux";
import myStore from "./src/Redux/Store";
import Fav from "./src/pages/Fav";
import Animate from "./src/pages/Animate";
import FormRegis from "./src/Form/FormRegis";
import TodoList from "./src/To-Do-List/TodoList";



export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <Provider store={myStore}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Login" component={FormRegis} />
          <Drawer.Screen name="ToDo List" component={TodoList} />
          <Drawer.Screen name="Movies" component={ListMovies} />
          <Drawer.Screen name="Favorite Movies" component={Fav} />
          <Drawer.Screen name="Animate" component={Animate} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
