import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import myStore from "./src/Redux/Store";
import Home from "./src/pages/Home";
import ListMovies from "./src/pages/ListMovies";
import Fav from "./src/pages/Fav";
import Animate from "./src/pages/Animate";
import FormRegis from "./src/Form/FormRegis";
import TodoList from "./src/To-Do-List/TodoList";

import ProfileScreen from './src/Components/ProfileScreen';
import CustomDrawerContent from './src/Components/CustomDrawer';

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <Provider store={myStore}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
              headerShown: true,
              drawerActiveTintColor: '#fff',
              drawerActiveBackgroundColor: '#1B3C53',
              drawerInactiveTintColor: '#333',
              drawerLabelStyle: { fontSize: 16 },
            }}
          >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Login" component={FormRegis} />
            <Drawer.Screen name="ToDo List" component={TodoList} />
            <Drawer.Screen name="Movies" component={ListMovies} />
            <Drawer.Screen name="Favorite Movies" component={Fav} />
            <Drawer.Screen name="Animate" component={Animate} />
          </Drawer.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}
