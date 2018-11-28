import { createMaterialTopTabNavigator } from "react-navigation";
import AddressPage from "../screens/AddressPage";
import Shipping from "../screens/Shipping";
import PaymentStack from "./PaymentStack";
export default TabNavigator = createMaterialTopTabNavigator({
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
                backgroundColor: '#F38B4C',
                height: 15,
                width: 15,
                borderRadius: 100,
                top: "88%",
                left: "15%"
            },
            labelStyle: {
                fontSize: 14,
                fontWeight: 'bold'
            },
            style: {
                backgroundColor: '#2EC9A7',
            }
        }
    }
)
