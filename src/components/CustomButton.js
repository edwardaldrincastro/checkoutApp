import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class CustomButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <View style={styles.buttonContainer}>
                        <Text  style={styles.buttonText}>{this.props.buttonText}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    buttonContainer: {
        // flex: 1,
        height: 50,
        // minHeight: 40,
        // maxHeight: 60,
        backgroundColor: '#F38B4C',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default CustomButton;
