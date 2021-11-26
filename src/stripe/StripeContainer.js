import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm } from "./CheckoutForm";
import React from "react";


const PUBLIC_Key = "pk_test_51Jx8drDvwrSG7rGRNUKuocEUf9xMkURz080ULzL1pF4VBycHFOdkk6USMNNfYTiM4wD0klwPbL0k2FOejtDmmUwR00xERyUHW1";
const stripeTest = loadStripe(PUBLIC_Key);

const Stripe = () =>{
    return(
    <Elements stripe={stripeTest} >
        <CheckoutForm></CheckoutForm>
    </Elements>
    )
}

export default Stripe;
