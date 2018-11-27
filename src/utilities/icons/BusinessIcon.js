import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { View, StyleSheet, } from 'react-native';


class BusinessIcon extends Component {
    render() {
        return (
            <View style={styles.iconContainer}>
                <Icon name="md-business" size={25} color="#8d8d8d" />
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


export default BusinessIcon