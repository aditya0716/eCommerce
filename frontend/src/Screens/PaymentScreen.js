import React, { useState } from "react";

import { Form, Button, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import FormContainer from "../Components/FormContainer";
import CheckOutSteps from "../Components/CheckOutSteps";
import { savePaymentMethod } from "../actions/carActions";

const PaymentScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <>
      <FormContainer>
        <CheckOutSteps step1 step2 step3 />
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as="legend">Select Payment Method</Form.Label>

            <Col>
              <Form.Check
                type="radio"
                checked
                label="PaPal or Credit Card"
                id="PayPal"
                name="paymentMethod"
                value="PayPal"
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
              {/* <Form.Check
                type="radio"
                label="Stripe"
                id="Stripe"
                name="paymentMethod"
                value="Stripe"
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check> */}
            </Col>
          </Form.Group>
          <Button type="submit" variant="primary">
            Continue
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default PaymentScreen;
