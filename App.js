import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import ListMovies from './src/pages/ListMovies';
import MovieDetalis from './src/pages/MovieDetalis';
import {Provider} from "react-redux";
import myStore from './src/Redux/Store';
import Fav from './src/pages/Fav';
import Animate from './src/pages/Animate';

export default function App() {
 const Drawer =createDrawerNavigator();
  return (
   <Provider store={myStore}> 
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="MyHome" component={Home}/>
         <Drawer.Screen name="Movies" component={ListMovies}/>
           <Drawer.Screen name="MovieDetalis" component={MovieDetalis}/>
            <Drawer.Screen name="Fav" component={Fav}/>
                <Drawer.Screen name="Animate" component={Animate} />

      </Drawer.Navigator>
    </NavigationContainer>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
