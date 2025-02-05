import {Text, Pressable,StyleSheet} from 'react-native'
import React from 'react'

export default function Row({item, overline}){
    //const backgroundColor = item.id === selectedId ? '#f0f0f0' : '#fff'
    /*const remove = () => {
        const arrayWithoutRemoved = data.filter((item) => item.id !== selectedId)
        setData(arrayWithoutRemoved)
        setSelectedId(null)
    }*/

    return(<Pressable style={styles.row} onPress={() => overline(item.id)}>
    <Text style={[styles.rowText, item.overlined && styles.overlinedText]}>{item.task}</Text>
    </Pressable>)
    
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowText: {
        fontSize: 16,
        padding: 4,
        margin: 4
    },
    overlinedText: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    }
})