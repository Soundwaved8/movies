import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import React from "react";
import axios from "axios";
import styled from "styled-components";
import { element } from "prop-types";

export const CheckoutForm=()=>{
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(event)=>{
        event.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:"card",
            card: elements.getElement(CardElement),
        });
        if(!error){
            console.log("Token Généré ", paymentMethod);
            try{
                const { id } = paymentMethod;
                const response = await axios.post("http://localhost:8080/stripe/charge",
                {
                    amount: 100,
                    id: id,
                });
                if (response.data.success)
                    console.log("Payement réussi");
            }
            catch(error){
                console.log("Erreur! ", error);
            }
        }
        else{
            console.log(error.message); 
        }
    }

    return(
        <Styleddiv>
            
        <form onSubmit={handleSubmit} style={{maxWidth: 400}}>
            <StyledCardElement
            options={{
                hidePostalCode: true
            }}
        />
        <Dbutton>Payer</Dbutton>
        </form>
        </Styleddiv>
    );
};
const Dbutton = styled.button`
    background: green;
    display: flex;
    justify-content: center;
    padding: 10px;
    margin-top:10px;
    border-radius: 5px;
    margin-left: 170px;
    cursor: pointer;
    animation: fade 0.8s;
`

const StyledCardElement = styled(CardElement)`
padding: 12px;
background-color: gray;
width: 400px;
`
const Styleddiv = styled.div`
display: flex;
padding-top: 150px;
width: 100%;
justify-content: center;
`

