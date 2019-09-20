import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    const onToken = token => {
        console.log('payment successful', token);
    }

    const priceForStripe = price * 100;
    const publishableKey = "pk_test_3dlwVqFnkrdkaEzMW23Fut2U00uuT8XkP3";

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing LTD"
            billingAddress
            shippingAddress
            // image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amout={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;