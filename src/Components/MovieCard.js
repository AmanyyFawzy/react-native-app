
import React from 'react';
import { View, Image, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

import { Fav } from '../Redux/Actions/FavAction';
import { useDispatch, useSelector } from 'react-redux';

export default function MovieCard(props) {
  const navigation = useNavigation();
   const dispatch = useDispatch()
 
    const favorites = useSelector((state) => state.fav);


  const isFav = favorites.some((m) => m.id === props.id);

const toggleFavorite = () => {
  const updated = isFav
    ? favorites.filter((m) => m.id !== props.id)
    : [...favorites, props];

  dispatch(Fav(updated));
};

  return (
    <View style={{ padding: 10 }}>
     <View style={styles.view1}>
       <View style={styles.imageContainer}>  <Image style={styles.image}  resizeMode="cover" source={{ uri: props.poster_path }} />
       </View>
      <View style={styles.view2}>
        <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.text2}>{props.release_date}</Text>
      <View style={styles.ratingContainer}><AntDesign name="star" size={24} color="yellow"style={styles.rating} /> {props.vote_average}</View>
   <View style={styles.iconRow}>
  <AntDesign name="like2" size={24} color="green" />
  <TouchableOpacity onPress={toggleFavorite}>
    <AntDesign name={isFav ? "heart" : "hearto"} size={24} color="red" />
  </TouchableOpacity>
</View>
      {props.id && (
  <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate("MovieDetalis", { id: props.id })}
  >
    <Text style={styles.buttonText}>View Details</Text>
  </TouchableOpacity>
)}
      </View>
     
     </View>
     
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f9f9f9',
  },

  image: {
    width: 200,
    height: 300,
    borderRadius: 12,
    marginBottom: 12,
   
  },

  rating: {
    fontSize: 18,
    fontWeight: 'bold',
    display:"inlineBolock"

  },
ratingContainer:{
    display:"flex",
    flexDirection:"row"
}
,
  overview: {
    fontStyle: 'italic',
    color: '#555',
    fontSize: 14,
  },

  view1: {
    width: '100%',
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginBottom: 10,
  },

  view2: {
    flex: 1,
    flexDirection: 'column',
    gap: 6,
    justifyContent: 'center',
  },

  text: {
    fontWeight: '700',
    fontSize: 16,
    color: '#2c3e50',
  },

  text2: {
    fontWeight: '600',
    fontSize: 13,
    color: '#7f8c8d',
  },

  button: {
    width: 160,
    backgroundColor: '#3498db',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },

  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  iconRow: {
  flexDirection: 'row',
  gap: 10,
  alignItems: 'center',
}
});

