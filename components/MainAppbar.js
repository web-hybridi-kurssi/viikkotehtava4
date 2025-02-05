import React from 'react'
import { Appbar } from 'react-native-paper'
import { StyleSheet } from 'react-native'

export default function MainAppbar({navigation, back}) {
    return(<Appbar.Header elevated={true}>
        <Appbar.Content style={styles.title} title="Todo list"
        />
    </Appbar.Header>)
}

const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        flex: 1,
    }
})