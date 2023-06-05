import { useEffect, useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";
import SearchResults from "./SearchResults";

export default SearchForm = ({ navigation }) => {

  const [searchInput, setSearchInput] = useState('');
  const [searchDone, setSearchDone] = useState(false);
  const [searchResult, setSearchResult] = useState({});

  const search_url = "https://itunes.apple.com/search?term=";
  let searchRequest;


  const doSearch = async () => {
  
    let string = searchInput;
    
    console.log("string : " + string);
    
    searchRequest = search_url + searchInput + "&country=FR&limit=25";
    try {
    return fetch(searchRequest)
        .then(response => response.json())
        .then(json => {
          setSearchResult(json);
          setSearchDone(true);
        })
        .catch(error => {
          console.error(error);
        }); 
    } catch (error) {
      console.log(error);
    }
  }

  

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.searchInput}
        onChangeText={(searchInput) => setSearchInput(searchInput)}>
      </TextInput>
      <Button onPress={doSearch} title="Rechercher"></Button>

      {searchDone && <SearchResults params={searchResult}></SearchResults>}      
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