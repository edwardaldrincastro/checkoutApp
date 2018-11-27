import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, CheckBox, Dimensions } from 'react-native';
import { CustomTextInput, CustomButton, LocalImage } from "../components";
import { CameraIcon, HelpIcon } from "../utilities/icons";
import { payment_method } from "../utilities/data/sample_data";
class PaymentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>

                <View style={styles.paymentDetailsContainer}>
                    <View style={styles.scannerContainer}>
                        <Text style={[styles.addressTextStyle, { paddingVertical: 10 }]}>Scan your card</Text>
                        <View style={styles.cardScanner}>
                            <View style={styles.scanCard}>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <CameraIcon />
                                </View>
                                <Text style={styles.saveTime}>Save time and scan your credit card</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.creditCardContainer}>
                        <Text style={styles.addressTextStyle}>Credit Card #No</Text>
                        <View style={styles.creditCardInputContainer}>
                            <View style={styles.creditCardNumber}>
                                <CustomTextInput />
                            </View>
                            <View style={styles.creditCardCompany}>
                                <LocalImage source={require('../assets/images/visa.png')}
                                    originalWidth={5000}
                                    originalHeight={1533}
                                    type='visa'
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.creditCardDetails}>
                        <View style={styles.expiryContainer}>
                            <Text style={styles.addressTextStyle}>Expires</Text>
                            <CustomTextInput />
                        </View>
                        <View style={styles.cvvContainer}>
                            <View style={{ flex: 4 }}>

                                <Text style={styles.addressTextStyle}>CVV Code</Text>
                                <CustomTextInput />
                            </View>
                            <View style={styles.questionMarkContainer}>
                                <View style={styles.helpContainer}>
                                    <HelpIcon />
                                </View>
                            </View>
                        </View>

                    </View>
                    <View style={styles.agreementContainer}>
                        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 15 }}>
                            <CheckBox />
                        </View>
                        <View style={styles.termsContainer}>
                            <Text style={styles.agreeTextStyle}>Agree to our terms & conditions</Text>
                            <Text style={styles.addressTextStyle}>I agree that I have read and accepted our <Text style={styles.colored}>terms & conditions</Text> for your purchase</Text>

                        </View>
                    </View>
                </View>
                <View style={{ flex: 1.2 }} />
                <View style={styles.buttonContainer}>
                    <CustomButton onPress={() => this.props.navigation.navigate('PaymentMode')} buttonText='Finish your order' />
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
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    agreeTextStyle: {
        fontSize: 18,
        color: '#333333',
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingTop: 5
    },
    colored: {
        color: '#F38B4C'
    },
    paymentDetailsContainer: {
        flex: 4,
    },
    scannerContainer: {
        flex: 1
    },
    conditionsText: {
        flex: 1,
    },
    termsText: {
        flex: 5,
        justifyContent: 'flex-start'
    },
    scanCard: {
        height: 50,
        width: "90%",
        borderWidth: 1,
        borderColor: '#333333',
        backgroundColor: '#fff',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal: 20,
    },
    saveTime: {
        flex: 4
    },
    creditCardContainer: {
        flex: 0.8,
        justifyContent: 'center',
    },
    creditCardInputContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    creditCardNumber: {
        flex: 4,
    },
    creditCardCompany: {
        flex: 1,
        justifyContent: 'center',
        padding: 5
    },
    creditCardDetails: {
        flex: 0.8,
        flexDirection: 'row',
    },
    agreementContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    expiryContainer: {
        flex: 5,
        justifyContent: 'center'
    },
    cvvContainer: {
        flex: 4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    questionMarkContainer: {
        flex: 1,
        paddingTop: 38,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    helpContainer: {
        height: 40,
        width: 40,
        backgroundColor: '#fff',
        borderColor: '#FAD1B9',
        borderRadius: 20,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardScanner: {
        flex: 1,
        flexDirection: 'row',
    },
    terms: {
        flex: 1,
        flexDirection: 'row',
    },
    termsContainer: {
        flex: 6,
        justifyContent: 'center'
    },
    shippingAddressContainer: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },

})

export default PaymentDetails;
