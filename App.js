import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import MainAppbar from './components/MainAppbar';
import { useCallback, useState, useEffect } from 'react';
import uuid from 'react-native-uuid'; 
import Add from './components/Add';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Row from './components/Row';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@items_key'

export default function App() {
  const [data, setData] = useState([])
  const [selected, setSelected] = useState('')

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    storeData()
  }, [data])

  const getData = async() => {
    try{
    const value = await AsyncStorage.getItem(STORAGE_KEY)
    const json = JSON.parse(value)
    if(json === null){
      json = []
    }
    setData(json)
  } catch(ex){
    console.log(ex)
  }
}

  const storeData = async(value) => {
    try{
    const json = JSON.stringify(value)
    await AsyncStorage.setItem(STORAGE_KEY, json)
  } catch(ex){
    console.log(ex)
  }
  }

  const addItem = useCallback((text) => {
    const newItem = {
      id: uuid.v4(),
      task: text,
      overlined: false,
    }
    const tempData = [...data, newItem]
    setData(tempData)
  }, [data])

  const overline = useCallback((id) => {
    const tempData = [...data]
    const chosen = tempData.find(item => item.id === id)
    chosen.overlined = !chosen.overlined
    setData(tempData)
  })




  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
      <MainAppbar/>
      <Add add={addItem}></Add>
      <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <Row item={item}
        overline={overline}/>
  )}
      />
      </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
