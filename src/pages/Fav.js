
import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, FlatList, StyleSheet,ScrollView } from 'react-native';

import MovieCard from '../Components/MovieCard';

export default function Fav() {
  const favorites = useSelector((state) => state.fav || []);

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Movies</Text>
     
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <MovieCard
              id={item.id}
              title={item.title}
              poster_path={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              release_date={item.release_date}
              vote_average={item.vote_average}
              overview={item.overview}
            />
          )}
        />
      
    </View>
    </ScrollView>
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


