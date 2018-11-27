import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "react-navigation";
import CardStackStyleInterpolator from "react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator";
import AddressPage from "../screens/AddressPage";
import Payment from "../screens/Payment";
import Shipping from "../screens/Shipping";
import PaymentStack from "./PaymentStack";
import { MenuIcon } from "../utilities/icons";
export default StackNavigator = createStackNavigator({
    Address: AddressPage,
    Payment: PaymentStack,
    Shipping: Shipping,
},
    {
        initialRouteName: 'Address',
        headerMode: 'screen',
        headerLayoutPreset: 'center',
        transitionConfig: () => {
            return { screenInterpolator: CardStackStyleInterpolator.forHorizontal }
        },
        navigationOptions: ({ navigation }) => {
            return {
                header: null,
                // headerLeft: (<MenuIcon />),
                // headerTitle: 'Checkout',
                // headerStyle: {
                //     backgroundColor: '#2ABB9C'
                // },
                // headerTitleStyle: {
                //     color: '#fff'
                // }
                
            }
        }
    }
)

