import React, { Component } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
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
        initialRouteName: 'Address',
        tabBarOptions: {
            activeTintColor: '#F38B4C',
            inactiveTintColor: '#fff',
            indicatorStyle: {
                borderBottomWidth: 3,
                borderBottomColor: '#F38B4C',
            },
            labelStyle: {
                fontSize: 14,
                fontWeight: 'bold'
            },
            style: {
                backgroundColor: '#2EC9A7',
            }
            // tabBarComponent: props => {
            //     // <View style={{ height: '70%', backgroundColor: '#2EC9A7', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>


            //     //     <Text style={{ fontSize: 20, color: '#fff', paddingHorizontal: 15, marginTop: 10 }}>Address</Text>
            //     //     <Text style={{ fontSize: 20, color: '#fff', paddingHorizontal: 15, marginTop: 10 }}>Shipping</Text>
            //     //     <Text style={{ fontSize: 20, color: '#fff', paddingHorizontal: 15, marginTop: 10 }}>Payment</Text>
            //     // </View>
            //     console.log(props)
            //     let tab = (<View style={{ justifyContent: 'center',backgroundColor: '#2EC9A7', height: 60, }}>
            //         <View style={{ height: '70%', backgroundColor: '#2EC9A7', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            //             <Text style={{ fontSize: 16, fontWeight: 'bold',  color: '#F38B4C', paddingHorizontal: 15, marginTop: 10 }}>Address</Text>
            //             <Text style={{ fontSize: 16, fontWeight: 'bold',  color: '#fff', paddingHorizontal: 15, marginTop: 10 }}>Shipping</Text>
            //             <Text style={{ fontSize: 16, fontWeight: 'bold',  color: '#fff', paddingHorizontal: 15, marginTop: 10 }}>Payment</Text>
            //         </View>
            //         <View style={{ backgroundColor: '#2EC9A7', height: '30%' }}>
            //             <View style={{ backgroundColor: '#2EC9A7', height: 10 }} />
            //             <View style={{ width: 15, height: 15, borderRadius: 20, backgroundColor: '#F38B4C', transform: [{ translateY: 1 }, { translateX: Dimensions.get('window').width * .16 }] }} />
            //         </View>

            //     </View>)

            //     if (props.navigation.state.index === 1) {
            //         tab = <View style={{ justifyContent: 'center', backgroundColor: '#2EC9A7', height: 60, }}>
            //             <View style={{ height: '70%', backgroundColor: '#2EC9A7', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>


            //                 <Text style={{ fontSize: 16, fontWeight: 'bold',  color: '#fff', paddingHorizontal: 15, marginTop: 10 }}>Address</Text>
            //                 <Text style={{ fontSize: 16, fontWeight: 'bold',  color: '#F38B4C', paddingHorizontal: 15, marginTop: 10 }}>Shipping</Text>
            //                 <Text style={{ fontSize: 16, fontWeight: 'bold',  color: '#fff', paddingHorizontal: 15, marginTop: 10 }}>Payment</Text>
            //             </View>
            //             <View style={{ backgroundColor: '#2EC9A7', height: '30%' }}>
            //                 <View style={{ backgroundColor: '#2EC9A7', height: 10 }} />
            //                 <View style={{ width: 15, height: 15, borderRadius: 20, backgroundColor: '#F38B4C', transform: [{ translateY: -15 }, { translateX: Dimensions.get('window').width * .48 }] }} />
            //             </View>

            //         </View>
            //     }
            //     else if (props.navigation.state.index === 2) {
            //         tab = <View style={{ justifyContent: 'center', backgroundColor: '#2EC9A7', height: 60, borderColor: 'transparent' }}>
            //             <View style={{ height: '70%', backgroundColor: '#2EC9A7', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>


            //                 <Text style={{ fontSize: 16, fontWeight: 'bold',  color: '#fff', paddingHorizontal: 15, marginTop: 10 }}>Address</Text>
            //                 <Text style={{ fontSize: 16, fontWeight: 'bold',  color: '#fff', paddingHorizontal: 15, marginTop: 10 }}>Shipping</Text>
            //                 <Text style={{ fontSize: 16, fontWeight: 'bold',  color: '#F38B4C', paddingHorizontal: 15, marginTop: 10 }}>Payment</Text>
            //             </View>
            //             <View style={{ backgroundColor: '#2EC9A7', height: '30%' }}>
            //                 <View style={{ backgroundColor: '#2EC9A7', height: 10 }} />
            //                 <View style={{ width: 15, height: 15, borderRadius: 20, backgroundColor: '#F38B4C', transform: [{ translateY: -15 }, { translateX: Dimensions.get('window').width * .79 }] }} />
            //             </View>

            //         </View>
            //     }
            //     return tab
        }
    }
)


const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        width: "100%",
        flexDirection: 'row'
    },
    container: {
        flex: 1,
    },
    hr: {
        height: 1,
        width: "100%",
        backgroundColor: '#eeeeee'
    },
    header: {
        flex: 1,
        maxHeight: 56,
        justifyContent: 'center',
        paddingLeft: 15
    },
    footer: {
        flex: 1,
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        marginTop: Dimensions.get("window").height / 8
    },
    footerText: {
        fontSize: 16,
        color: "#8d8d8d",
        fontWeight: 'bold',
        paddingVertical: 10
    }
})

