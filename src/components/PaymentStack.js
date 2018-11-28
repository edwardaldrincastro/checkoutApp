import { createStackNavigator } from "react-navigation";
import CardStackStyleInterpolator from "react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator";
import Payment from "../screens/Payment";
import PaymentDetails from "../screens/PaymentDetails";
 export default PaymentStackNav = createStackNavigator({
    PaymentMode: Payment,
    PaymentDetails: PaymentDetails,
},
    {
        initialRouteName: 'PaymentMode',
        transitionConfig: () => {
            return { screenInterpolator: CardStackStyleInterpolator.forHorizontal }
        },
        navigationOptions: {
            header: null,

        }

    }
)

