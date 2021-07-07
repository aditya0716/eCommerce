import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

const addOrderItems = asyncHandler(async (req, res) => {
  //console.log("@@@@@@@@", req.user._id);
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (order) {
    res.json(order);
  } else {
    res.stats(404);
    throw new Error("Order Not Found");
  }
});

const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.payment = {
      id: req.body.id,
      status: req.body.staus, //paypal api...
      update_time: req.body.update_time, //paypal api...
      email_address: req.body.payer.email_address, //paypal api...
    };
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.stats(404);
    throw new Error("Order Not Found");
  }
});

export { addOrderItems, getOrderById, updateOrderToPaid };
