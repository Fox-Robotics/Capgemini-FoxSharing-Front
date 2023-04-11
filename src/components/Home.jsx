import { View, StyleSheet,TextInput, Dimensions, Text, Pressable} from 'react-native'
import React from 'react'
import {useState} from "react"
import MapView, {Marker} from 'react-native-maps'
import RBSheet from "react-native-raw-bottom-sheet";


export default function Home() {
  const [origin, setOrigin] =  useState({
    latitude: 20.654522,
    longitude: -103.392398
  });

  const { height } = Dimensions.get('window');
  const [text, setText] = useState('');
  return (
    <View>
      <MapView  
        style={styles.map}
        initialRegion ={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04
        }}
      >
        <Marker 
          coordinate={origin}
        />
      </MapView>
        <View style={styles.searchButtonContainer}>
            <Pressable style={styles.searchButton} onPress={() => this.RBSheet.open()}>
                <Text style={styles.searchButtonText}>¿A dónde vas?</Text>
            </Pressable>
        </View>
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={(85*height)/100}
          openDuration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >
          <TextInput
                style={{}}
                placeholder="ESTO ES UN INPUT"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
        </RBSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  map:{
    width: "100%",
    height: "100%"
  },
  destination:{
    position: 'absolute',
    bottom: "0%",
    backgroundColor: "black"
  },
  searchButtonContainer:{
    position: "absolute",
    top: "90%",
    width: "100%",
    display: "flex",
    alignItems: "center"
  },
  searchButton:{
    color: '#00BAD4',
    padding: "6%",
    width:"80%",
    backgroundColor: "black",
    borderRadius: "100%",
    display: "flex",
  },
  searchButtonText:{
    color: "white"
  }
})