import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey ='pk_test_51IYHc1CVFwHS0dLINi8vtRaZVFtMa6sOUXynS2E8v7hnJfrCop02HsBoiP7Ygx7DC8Klphr85Q1b5KZZv3lHWv2500q3rd5o4o'
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return(
        <StripeCheckout
            label= 'Pay Now'
            name = 'DONO Clothing '
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    );
};

export default StripeCheckoutButton;