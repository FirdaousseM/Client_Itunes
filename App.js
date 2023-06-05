import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';

export default function App() {
  const Stack = createNativeStackNavigator();
    
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="SearchForm" component={SearchForm}></Stack.Screen>
        <Stack.Screen name="SearchResults" component={SearchResults}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


