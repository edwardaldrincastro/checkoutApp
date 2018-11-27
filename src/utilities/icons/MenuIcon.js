import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { View, StyleSheet, } from 'react-native';


class MenuIcon extends Component {
    render() {
        return (
            <View style={styles.iconContainer}>
                <Icon name="md-menu" size={36} color="#fff" onPress={() => alert('Drawer')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    iconContainer: {
        width: 72,
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: 15
    }
})


export default MenuIcon