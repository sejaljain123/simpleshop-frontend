const invoiceData = {
  id: "",
  date: "",
  customer_name: "",
  customer_address: "",
  items: [
    {
      name: "",
      weight: 0.00,
      rate: 0.00,
      amount: 0.00,
      unit: "gm",
    },
  ],
  gst: false,
  discount: 0.00,
  notes: "",
  received_amount: 0.00,
  payment_type: ""
};

export default invoiceData;