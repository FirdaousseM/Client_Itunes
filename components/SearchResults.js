import { useState } from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";
import { View, Image, Text, TouchableOpacity } from "react-native";

export default SearchResults = ({ params }) => {

  //console.log(params);

  let resultsList = new Array();

  for (let i = 0; i < params.resultCount; i++) {
    resultsList.push({
      trackName: params.results[i].trackName,
      artistName: params.results[i].artistName,
      kind: params.results[i].kind,
      genre: params.results[i].primaryGenreName,
      country: params.results[i].country,
      releaseDate: params.results[i].releaseDate,
      image: params.results[i].artworkUrl100,
      collectionName: params.results[i].collectionName
    })
  }

  //console.log(resultsList);

  const onNavigate = (item) => {
    navigation.navigate('ResultDetailsScreen', { 'resultValues': item })
  };

  return (
    <View style={styles.screen}>
      {
        <FlatList
          data={resultsList}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) =>
            <View>
              <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
              <Text>{item.trackName}</Text>
              <Text>By {item.artistName}</Text>
              <Text>{item.kind}</Text>
              <Text>{item.genre}</Text>
              <Text>{item.country}</Text>
              <Text>{item.releaseDate}</Text>
              <Text>{item.collectionName}</Text>
            </View>
          }
        ></FlatList>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchInput: {
    borderWidth: 2,
    width: 300,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});