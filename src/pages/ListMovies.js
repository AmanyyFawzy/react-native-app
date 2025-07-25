
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import axios from 'axios';
import MovieCard from '../Components/MovieCard';

export default function ListMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1')
      .then((response) => {
        setMovies(response.data.results); 
      })
      .catch((error) => {
        console.error("Error :", error);
      });
  }, []);

  return (
    <ScrollView>
      <View>
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id}
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
