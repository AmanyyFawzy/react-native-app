import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function MovieDetalis({ route }) {
  const movieId = route.params.id;
  const [details, setDetails] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {details.poster_path && (
        <Image
          style={styles.image}
          source={{ uri: `https://image.tmdb.org/t/p/w500${details.poster_path}` }}
        />
      )}
      <Text style={styles.title}>{details.title}</Text>
      <Text style={styles.release}>Release Date: {details.release_date}</Text>
        <Text style={styles.release}>Popularity: {details.popularity}</Text>

      <View style={styles.ratingContainer}><AntDesign name="star" size={24} color="yellow"style={styles.rating} />{details.vote_average}</View>
      <Text style={styles.overview}>{details.overview}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 450,
    borderRadius: 12,
    marginBottom: 24,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#444',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 12,
    textAlign: 'center',
  },
  release: {
    fontSize: 16,
    color: 'black',
    marginBottom: 6,
  },
  rating: {
    fontSize: 18,
    fontWeight: 'bold',
    display:"inlineBolock"

  },
ratingContainer:{
    display:"flex",
    flexDirection:"row",
    color:'black'
}
,
  overview: {
    fontSize: 16,
    color: 'black',
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal: 10,
   
  }
});

