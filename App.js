import React, { useState } from "react";
import { Alert, FlatList, StyleSheet, View, Text, Button, SafeAreaView, ActivityIndicator, TextInput } from "react-native";
import { Keyboard } from 'react-native';
import * as SQLite from 'expo-sqlite';
import axios from "axios";

export default ApiContainer = () => {

  async function getRandomUsers() {
    try {
      const data = await axios.get("https://random-data-api.com//api/beer/random_beer?size=1");
      console.log(data.data);
      return data;
    } catch(err) {
      console.log("error: ", err);
    }
  }

  return (
    <SafeAreaView style={{ top: 30 }}>
      <View style={{ margin: 18 }}>
        <Button
          title={'Buscar o endereço'}
          onPress={() => { getRandomUsers() }}
          color='green'
        />
      </View>
    </SafeAreaView>
  )
  
}