import { Text, FlatList, View } from 'react-native'
import React from 'react'
import history from '../data/history'
import ListaEntradas from './ListaEntradas'

const EntradasHistorial = () => {
    return(
        <FlatList 
            data = {history}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({item : his}) => (
                <ListaEntradas {... his}/>
            )}
        contentContainerStyle={{paddingBottom: 20}}
        style = {{paddingTop: 10}}/>
    )
}

export default EntradasHistorial