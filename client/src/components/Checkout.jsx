import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { placeOrder } from "../actions/orderAction";

const Checkout = ({ subTotal }) => {
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    dispatch(placeOrder(token, subTotal));
    console.log(token);
  };
  return (
    <StripeCheckout
      amount={subTotal * 100}
      shippingAddress
      token={tokenHandler}
      stripeKey="pk_test_51LZG1ZSGdd4j8EwwnJ6cNHMBpgVWVLGnKReGWeYdIaF4MZ50gQU6U6qXPaEhq3dArArCEXmLEwpceHSpwmc8i4Fa00DhZN64E5"
      currency="INR"
    >
      <Button>Pay now</Button>
    </StripeCheckout>
  );
};

export default Checkout;
