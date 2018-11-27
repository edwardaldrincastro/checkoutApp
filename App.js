import React, { Component } from 'react';
import { TabNavigator } from "./src/components/";
import { View, Text, StyleSheet, } from 'react-native';
import { MenuIcon } from "./src/utilities/icons";
export default class App extends Component {
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <MenuIcon />
          <View style={{ flex: 1, justifyContent: 'center', }}>
            <Text style={styles.headerTitle}>Checkout</Text>
          </View>
          <View style={{ width: 87 }} />
        </View>
        <TabNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    height: 56,
    backgroundColor: "#2ABB9C",
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: 'bold',
  },
})