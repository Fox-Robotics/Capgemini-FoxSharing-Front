import { View, StyleSheet,TextInput, Dimensions, Text, Pressable} from 'react-native'
import React from 'react'
import {useState, useRef} from "react"
import MapView, {Marker} from 'react-native-maps'
import RBSheet from "react-native-raw-bottom-sheet";
import SheetContent from './RenderContent';

export default function Home({navigation}) {
    const refRBSheet = useRef();
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
            <Pressable style={styles.searchButton} onPress={() => refRBSheet.current.open()}>
                <Text style={styles.searchButtonText}>¿A dónde vas?</Text>
            </Pressable>
        </View>

        <RBSheet
          ref={refRBSheet}
          keyboardAvoidingViewEnabled= {false}
          dragFromTopOnly={false}
          closeOnDragDown={true}
          height={(90*height)/100}
          openDuration={250}
          customStyles={{
            container: {
                display: "flex",
                padding: "5%"
            }
          }}
        >
        <SheetContent navigation={navigation}/>
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
    borderRadius: 100,
    display: "flex",
  },
  searchButtonText:{
    color: "white"
  },
  searchInputText:{
    color: "white",
    padding: "6%",
    backgroundColor: "black",
    borderRadius: 100,
  }
})
