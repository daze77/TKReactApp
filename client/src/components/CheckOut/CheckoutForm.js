import React, { useEffect, useState } from "react";
import { useStoreContext } from "../../utils/GlobalStore";

import {PaymentElement, useStripe, useElements} from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [href, setHref] = useState("http://localhost:3000")

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  const [{totalCost} ]= useStoreContext()


  // useEffect(() => {

  //   (window.location.href.split('/')[2] === "localhost:3000") ? setHref('http://localhost:3000') : setHref('https://bthtkapp.herokuapp.com')



  //   if (!stripe) {
  //     return;
  //   }

  //   const clientSecret = new URLSearchParams(window.location.search).get(
  //     "payment_intent_client_secret"
  //   );

  //   if (!clientSecret) {
  //     return;
  //   }

  //   stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
  //     switch (paymentIntent.status) {
  //       case "succeeded":
  //         setMessage("Payment succeeded!");
  //         break;
  //       case "processing":
  //         setMessage("Your payment is processing.");
  //         break;
  //       case "requires_payment_method":
  //         setMessage("Your payment was not successful, please try again.");
  //         break;
  //       default:
  //         setMessage("Something went wrong.");
  //         break;
  //     }
  //   });
  // }, [stripe]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   localStorage.removeItem('TKBasket')

  //   if (!stripe || !elements) {
  //     console.log('stripe has not loaded whompers')
  //     // Stripe.js has not yet loaded.
  //     // Make sure to disable form submission until Stripe.js has loaded.
  //     return;
  //   }

  //   setIsLoading(true);

  //   const result = await stripe.confirmPayment({
  //     elements,
  //     confirmParams: {
  //       // Make sure to change this to your payment completion page
        
  //       return_url: href,
  //     },
      
  //   });


  //   // This point will only be reached if there is an immediate error when
  //   // confirming the payment. Otherwise, your customer will be redirected to
  //   // your `return_url`. For some payment methods like iDEAL, your customer will
  //   // be redirected to an intermediate site first to authorize the payment, then
  //   // redirected to the `return_url`.
  //   if (result.error) {
  //     console.log('we have an error', result.error.message);
  //   } else {
  //     console.log("success");
  //   }

  //   setIsLoading(false);
  // };



  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }

  }




  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={!stripe} id="submit">
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner"></div> : `Pay now $ ${totalCost}` }
        </span>
      </button>
      {/* Show any error or success messages */}
      {/* {message && <div id="payment-message">{message}</div>} */}
    </form>
  );
}