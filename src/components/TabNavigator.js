import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from "react-navigation";
import CardStackStyleInterpolator from "react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator";
import AddressPage from "../screens/AddressPage";
import Payment from "../screens/Payment";
import Shipping from "../screens/Shipping";
import PaymentStack from "./PaymentStack";
import { MenuIcon } from "../utilities/icons";
export default StackNavigator = createMaterialTopTabNavigator({
    Address: AddressPage,
    Shipping: Shipping,
    Payment: PaymentStack,
},
    {
        initialRouteName: 'Payment',
        
    }
)

