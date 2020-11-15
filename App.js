
import React, {useState, useEffect,Component} from 'react'; 
import { StyleSheet, Text, FlatList,Image, View,StatusBar, SafeAreaView} from 'react-native';




export default function App() {
  
  const Appi = () => {
    return (
       <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
    )
 }

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
      <Text style={{fontSize: 25 }}>Nombre: {item.medicina}{"\n"}</Text>
      <Text style={{fontSize: 25 }}>Existencia: {item.existencia}{"\n"}</Text>
      <Text style={{fontSize: 25 }}>Fecha Ingreso: {item.fechA_INGRESO}{"\n"}</Text>
      <Text style={{fontSize: 25 }}>Vencimiento:  {item.fechA_VENCIMIENTO}{"\n"}</Text>
      <View>

        <Image 
          style={{ width: 100, height: 100 }}
          source={{uri:  item.imagen}}
        />
      </View>
      </Text>
      }
      
    /> );
   } 
   const styles = StyleSheet.create({ container: {
      paddingTop: 30, },
      text: { fontSize: 20, 
        margin: 10 }, });
        
        