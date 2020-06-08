import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Conversor from "./src/Conversor"


//https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=b6f21d6b8616c496188f
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Conversor />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30

  },
});
