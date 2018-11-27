import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CustomTextInput, CustomButton } from "../components";
class AddressPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            // <KeyboardAvoidingView enabled>
                <ScrollView style={styles.container}>
                    <View style={styles.nameContainer}>
                        {/* <View style={styles.nameText}> */}
                        <Text style={styles.addressTextStyle}>Your Name</Text>
                        {/* </View> */}
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
                        <Text style={[styles.addressTextStyle, {color:'#F38B4C', paddingTop: 10}]}>Please ship to another address</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton onPress={() => this.props.navigation.navigate('Shipping')} buttonText='Next Step' />
                    </View>
                {/* </View> */}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 15,
    },
    addressTextStyle: {
        fontSize: 16,
        color: '#8d8d8d',
        fontWeight: 'bold',
        paddingHorizontal: 20
    },
    nameContainer: {
        flex: 1,
        // backgroundColor: '#F7D24C',
        minHeight: 100,
    },
    nameText: {
        flex: 1,
    },
    nameInputContainer: {
        flex: 1,
        flexDirection: 'row',
        // paddingHorizontal: 10,
        alignItems: 'center'
    },
    firstName: {
        flex: 1,
        // justifyContent: 'center'
    },
    lastName: {
        flex: 1,
        // justifyContent: 'center'
    },
    addressFirstContainer: {
        flex: 1,
        // backgroundColor: '#2EC9A7',
        justifyContent: 'space-around',
        minHeight: 100,
    },
    addressSecondContainer: {
        flex: 1,
        // backgroundColor: '#1E1E1E',
        justifyContent: 'space-around',
        minHeight: 100,
    },

    locationContainer: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: '#B5B53D',
        minHeight: 100,
    },
    cityContainer: {
        flex: 1,
        justifyContent: 'space-around'
    },
    zipContainer: {
        flex: 1,
        justifyContent: 'space-around'
    },
    // city: {
    //     flex: 1,
    //     justifyContent: 'center'
    // },
    // zip: {
    //     flex: 1,
    //     justifyContent: 'center'
    // },
    placeContainer: {
        flex: 1,
        flexDirection: 'row',
        minHeight: 100,
        // backgroundColor: '#7EB445'
    },
    stateContainer: {
        flex: 1,
        justifyContent: 'space-around'
    },
    countryContainer: {
        flex: 1,
        justifyContent: 'space-around'
    },
    // state: {
    //     flex: 1,
    //     justifyContent: 'center'
    // },
    // country: {
    //     flex: 1,
    //     justifyContent: 'center'
    // },
    shippingContainer: {
        flex: 1,
        // backgroundColor: '#007ACC',
        justifyContent: 'center',
        minHeight: 100,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        minHeight: 100,
        // backgroundColor: '#CE9178',
    },

})
export default AddressPage;
