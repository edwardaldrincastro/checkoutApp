export const shipping_company = [
    {
        id: 1,
        name: "DHL",
        cost: "No additional Costs",
        image: require('checkoutApp/src/assets/images/dhl_logo.png'),
        type: 'dhl',
        width: 2000,
        height: 443
    },
    {
        id: 2,
        name: "UPS",
        cost: "No additional Costs",
        image: require('checkoutApp/src/assets/images/ups_logo.png'),
        type: 'ups',
        width: 880,
        height: 660
    },
    {
        id: 3,
        name: "FEDEX EXPRESS",
        cost: "Additional 12.99 $",
        image: require('checkoutApp/src/assets/images/fedex_logo.png'),
        type: 'fedex',
        width: 2000,
        height: 907
     
    },
    
]

export const payment_method = [
    {
        id: 1,
        name: "Credit Card",
        cost: "Visa, Mastercard, JCB, Amex",
        image: require('checkoutApp/src/assets/images/creditcard.png'),
        type: 'creditCard',
        width: 619,
        height: 144
    },
    {
        id: 2,
        name: "Paypal",
        cost: "paypalaccount@gmail.com",
        image: require('checkoutApp/src/assets/images/paypal.png'),
        type: 'paypal',
        width: 640,
        height: 169
    },
    {
        id: 3,
        name: "ApplePay",
        cost: "applepay@gmail.com",
        image: require('checkoutApp/src/assets/images/applepay.png'),
        type: 'applepay',
        width: 2000,
        height: 820
     
    },
    
]
