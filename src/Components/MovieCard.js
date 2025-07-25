import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Fav } from '../Redux/Actions/FavAction';
import { useDispatch, useSelector } from 'react-redux';

export default function MovieCard(props) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.fav);

  const isFav = favorites.some((m) => m.id === props.id);

  const toggleFavorite = () => {
    const updated = isFav
      ? favorites.filter((m) => m.id !== props.id)
      : [...favorites, props];
    dispatch(Fav(updated));
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
          style={styles.poster} 
          resizeMode="cover" 
          source={{ uri: props.poster_path }} 
        />

        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
          <Text style={styles.releaseDate}>{props.release_date}</Text>
          
          <View style={styles.ratingContainer}>
            <AntDesign name="star" size={20} color="#FFD700" />
            <Text style={styles.ratingText}>{props.vote_average}</Text>
          </View>
          
          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.actionButton}>
              <AntDesign name="like2" size={22} color="#2ecc71" />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={toggleFavorite} style={styles.actionButton}>
              <AntDesign 
                name={isFav ? "heart" : "hearto"} 
                size={22} 
                color={isFav ? "#e74c3c" : "#7f8c8d"} 
              />
            </TouchableOpacity>
          </View>
          
          {props.id && (
            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigation.navigate("MovieDetalis", { id: props.id })}
            >
              <Text style={styles.detailsButtonText}>View Details</Text>
              <AntDesign name="arrowright" size={16} color="#fff" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#8a4e9cff',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  poster: {
    width: 200,
    height: 250,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    objectFit:'fill'
  },
  content: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 6,
  },
  releaseDate: {
    fontSize: 13,
    color: '#b3c1c2ff',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    marginLeft: 6,
    fontSize: 15,
    fontWeight: '600',
    color: '#f39c12',
  },
  actionsRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  actionButton: {
    marginRight: 16,
    padding: 6,
    borderRadius: 50,
    backgroundColor: '#ecf0f1',
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9b5dadff',
    paddingVertical: 10,
    borderRadius: 30,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
  },
  detailsButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    marginRight: 8,
  },
});
