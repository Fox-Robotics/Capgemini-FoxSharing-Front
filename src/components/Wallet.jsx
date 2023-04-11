import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import theme from '../theme.js'
import RBSheet from 'react-native-raw-bottom-sheet'



const styles = StyleSheet.create (
  {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 70,
     

    },


    paymentsBox: {
      width: 320,
      height: 170,
      borderRadius: 10,
      backgroundColor: theme.colors.c4,
      display: "flex",
      flexDirection: "column",
      justifyContent: 'space-evenly',
      paddingLeft: 20
    },

    cash: {
      fontFamily: theme.fonts.main,
      color: theme.colors.c1,
      fontWeight: theme.fontWeights.normal,
      fontSize: 20,
    },

    fondos: {
      fontFamily: theme.fonts.main,
      color: theme.colors.c1,
      fontWeight: theme.fontWeights.bold,
      fontSize: 30,
    },

    botonAgregar:{
      backgroundColor: theme.colors.highlight,
      width: 179,
      height: 46,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },

    agregar: {
      fontFamily: theme.fonts.normal,
    },

    cuponesContainer: {
      width: 320,
      height: 170,
      borderRadius: 10,
      display: "flex",
      flexDirection: "column",
      justifyContent: 'center',
      

    },
    
    cuponesText: {
      fontFamily: theme.fonts.main,
      color: theme.colors.c1,
      fontWeight: theme.fontWeights.bold,
      fontSize: 25,

    },

    linea: {
      width: 320,
      height: 1,
      backgroundColor: theme.colors.dark

    },

    botonCupon: {

      paddingTop: 20
    }

  }

)


const Wallet = () => {
  return (
    <View style= {styles.container}>
        
            <View style= {styles.paymentsBox}>
              <Text style = {styles.cash}>Cash</Text>
              <Text style = {styles.fondos}>MXN 200.00</Text>
              <Pressable style = {styles.botonAgregar} onPress={() => this.RBSheet.open()}>
                <Text style= {styles.agregar}>+ Agregar fondos</Text>
              </Pressable>
            </View>
        
            <View style= {styles.cuponesContainer}>
              <Text style= {styles.cuponesText}>Cupones</Text>
              <View style= {styles.linea}/>
              <Pressable style = {styles.botonCupon} onPress={() => this.RBSheet.open()}>
                  <Text style= {styles.agregar}>+ Agregar cupon</Text>
              </Pressable>
            </View>
    </View>

   


  )
}

export default Wallet 

