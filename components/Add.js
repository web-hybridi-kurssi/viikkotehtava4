import { View, Text, TextInput, Button, StyleSheet, Pressable } from "react-native";
import React, {useState} from 'react'


export default function Add({add}){
    const [task, setTask] = useState('')

    const save = () => {
        add(task)
        setTask('')
    }

    return(
        <View style={styles.container}>
            <TextInput style={styles.form} value={task} onChangeText={setTask} placeholder="Enter task" />
            <Pressable style={styles.container} onPress={() => save()}>
                <Text style={styles.saveText}>Save</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    saveText: {
        color: "blue",
        fontSize: 16,
        padding: 10
    },
    form: {
        fontSize: 16
    }
})