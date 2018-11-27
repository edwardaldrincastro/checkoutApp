import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { CustomTextInput, CustomButton } from "../components";
class AddressPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <View style={[styles.nameContainer, { paddingTop: 15 }]}>
                    <Text style={styles.addressTextStyle}>Your Name</Text>
                    <View style={styles.nameInputContainer}>
                        <View style={styles.firstName}>
                            <CustomTextInput />
                        </View>
                        <View style={styles.lastName}>
                            <CustomTextInput />
                        </View>
                    </View>
                </View>
                <View style={styles.addressFirstContainer}>
                    <Text style={styles.addressTextStyle}>Address line 1</Text>
                    <CustomTextInput />
                </View>
                <View style={styles.addressSecondContainer}>
                    <Text style={styles.addressTextStyle}>Address line 2</Text>
                    <CustomTextInput />
                </View>
                <View style={styles.locationContainer}>

                    <View style={styles.cityContainer}>
                        <Text style={styles.addressTextStyle}>City</Text>
                        <CustomTextInput />
                    </View>
                    <View style={styles.zipContainer}>
                        <Text style={styles.addressTextStyle}>Zip</Text>
                        <CustomTextInput />
                    </View>
                </View>
                <View style={styles.placeContainer}>
                    <View style={styles.stateContainer}>
                        <Text style={styles.addressTextStyle}>State</Text>
                        <CustomTextInput />
                    </View>
                    <View style={styles.countryContainer}>
                        <Text style={styles.addressTextStyle}>Country</Text>
                        <CustomTextInput />
                    </View>
                </View>
                <View style={styles.shippingContainer}>
                    <Text style={styles.addressTextStyle}>Shipping Options</Text>
                    <Text style={[styles.addressTextStyle, { color: '#F38B4C', paddingTop: 10 }]}>Please ship to another address</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton onPress={() => this.props.navigation.navigate('Shipping')} buttonText='Next Step' />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 1,
        minHeight: Dimensions.get("window").height * 0.83
    },
    addressTextStyle: {
        fontSize: 16,
        color: '#8d8d8d',
        fontWeight: 'bold',
        paddingHorizontal: 20
    },
    nameContainer: {
        flex: 1,
    },
    nameText: {
        flex: 1,
    },
    nameInputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    firstName: {
        flex: 1,
    },
    lastName: {
        flex: 1,
    },
    addressFirstContainer: {
        flex: 1,
        justifyContent: 'space-around',
    },
    addressSecondContainer: {
        flex: 1,
        justifyContent: 'space-around',
    },

    locationContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    cityContainer: {
        flex: 1,
        justifyContent: 'space-around'
    },
    zipContainer: {
        flex: 1,
        justifyContent: 'space-around'
    },
    placeContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    stateContainer: {
        flex: 1,
        justifyContent: 'space-around'
    },
    countryContainer: {
        flex: 1,
        justifyContent: 'space-around'
    },
    shippingContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },

})
export default AddressPage;
