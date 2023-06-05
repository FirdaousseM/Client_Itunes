import { useEffect, useState } from 'react';
import { StyleSheet, Button, View, Text, Image, TouchableOpacity } from 'react-native';


export default ResultDetailsScreen = ({ route }) => {
  const { resultValues } = route.params;


  let item = resultValues.item;

  return (

    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
      <Text>{item.trackName}</Text>
      <Text>By {item.artistName}</Text>
      <Text>{item.kind}</Text>
      <Text>{item.genre}</Text>
      <Text>{item.country}</Text>
      <Text>{item.releaseDate}</Text>
      <Text>{item.collectionName}</Text>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});