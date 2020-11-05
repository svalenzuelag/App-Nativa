import React, {useState, useEffect} from 'react'; 
import { StyleSheet, Text, FlatList } from 'react-native';
export default function App() {
   const [countriesData, setCountriesData] = useState([]) 
   function fetchCountriesData() {
      fetch('https://apimedicina.azurewebsites.net/api/medicina') 
      .then((response) => response.json()) 
      .then((json) => setCountriesData(json)) 
      .catch((error) => console.error(error)) 
    }
     useEffect(()=> { fetchCountriesData(); 
    }) 
    return ( 
    <FlatList 
    data={countriesData} 
    contentContainerStyle={styles.container} 
    keyExtractor={item => item.iD_MEDICINA} 
    renderItem={({item})=> 
    <Text style={styles.text}>
      {item.name}
      {item.releaseYear}
      {item.medicina}
      {item.existencia} 
      {item.fechA_INGRESO}
      {item.fechA_VENCIMIENTO} 
      {item.imagen}
      </Text>} 
    /> );
   } 
   const styles = StyleSheet.create({ container: {
      paddingTop: 30, },
      text: { fontSize: 20, 
        margin: 10 }, });