import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, CheckBox, } from 'react-native';
import { CustomTextInput, CustomButton, LocalImage } from "../components";
import { BusinessIcon } from "../utilities/icons";
import { payment_method } from "../utilities/data/sample_data";
class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.shippingTypeContainer}>
          <Text style={[styles.addressTextStyle, { paddingVertical: 10 }]}>How do you wish to pay?</Text>
          
          {payment_method.map((item, index) => (
          <View style={styles.shippingCompanyContainer} key={index}>
            <View style={styles.checkBoxContainer}>
              <CheckBox />
            </View>
            <View style={styles.shippingDetails}>
              <View style={styles.companyLogo}>
                <LocalImage source={item.image}
                  originalWidth={item.width}
                  originalHeight={item.height}
                />
              </View>
              <View style={styles.companyDetails}>
                <Text style={[styles.companyName, {fontSize: 16}]}>{item.name}</Text>
                <Text style={[styles.addressTextStyle, {fontSize: 14}]}>{item.cost}</Text>
              </View>
            </View>
          </View>
          ))}
      
        </View>

        <View style={styles.shippingAddressContainer}>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton onPress={() => this.props.navigation.navigate('Payment')} buttonText='Next Step' />
        </View>
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
  shippingAddressTextStyle: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    paddingHorizontal: 20
  },
  shippingTypeContainer: {
    flex: 3.5,
    minHeight: 355,
  },
  shippingCompanyContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  checkBoxContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shippingDetails: {
    flex: 5,
    flexDirection: 'row',
  },
  companyLogo: {
    flex: 1,
    backgroundColor: '#007ACC',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  companyDetails: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  companyName: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    paddingHorizontal: 20
  },
  shippingAddressContainer: {
    flex: 2.5,
    minHeight: 260,
    borderTopWidth: 1,
    borderTopColor: '#8d8d8d',
  },
  shippingAddressDetails: {
    paddingVertical: 10,
  },
  shippingAddressTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15
  },
  buttonContainer: {
    flex: 1,
    minHeight: 100,
    justifyContent: 'flex-end',
  },

})

export default Payment;
