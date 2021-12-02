import React, { useState, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalStore";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "../CheckOut/CheckoutForm";
import "./Payments.css";
import fetchJSON from "../../utils/API";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with a fake API key.
const stripePromise = loadStripe("pk_test_51JzCTiJvID62zcJ6KOIASxQEYMpSBjGfIBaF8gXHD2fVH7x8n1Vixitz36QOckvmhRMhiXovgK2DCYSJNv5qlNZt00MYBevMO7");


 function Payments(){
  const [{totalCost, basketList, ...data} ]= useStoreContext()
  const [clientSecret, setClientSecret] = useState("");

    // Create PaymentIntent as soon as the page loads
      
    async function getPayment(){

        const localStorageLS = (localStorage.TKBasket) ? JSON.parse(localStorage.TKBasket) : [{emai:data.email}, {basket:[]}]


      const results = await fetchJSON("/api/create-payment-intent", 'post', localStorageLS)
      setClientSecret(results.clientSecret);

    }

    useEffect(() => {
      getPayment()

    },[])


  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div >
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default Payments