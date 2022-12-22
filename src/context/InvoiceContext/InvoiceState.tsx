import { useState } from "react";
import invoiceData from "../../components/InvoiceTemplate/InvoiceData";
import InvoiceContext from "./InvoiceContext";

const InvoiceState = (props: any) => {
  const [formData, setFormData] = useState(invoiceData);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [items, setItems] = useState({});
  const [subTotal, setSubTotal] = useState(0.0);
  
  const updateFormData = (field: string, value: any) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const updateItems = (index: number, field: string, value: any) => {
    setFormData((a) => {
      const copy = JSON.parse(JSON.stringify(a));
      copy.items[index][field] = value;
      const amount = (copy.items[index].weight * copy.items[index].rate) / 10;
      copy.items[index].amount = amount;
      let subTotal = 0;
      copy.items.forEach((item: any) => {
        subTotal = subTotal + item.amount;
      });
      setSubTotal(subTotal);
      return copy;
    });
  };

  const addItem = () => {
    setFormData((a) => {
      const copy = JSON.parse(JSON.stringify(a));
      copy.items.push({
        name: "",
        type: "",
        weight: 0.0,
        quantity: 0.0,
        rate: 0.0,
        amount: 0.0,
        unit: "gm",
      });
      return copy;
    });
    setItems((a) => {
      const copy = JSON.parse(JSON.stringify(a));
      copy[formData.items.length] = true;
      return copy;
    });
  };

  const removeItem = (index: number) => {
    setFormData((a) => {
      const copy = JSON.parse(JSON.stringify(a));
      copy.items.splice(index, 1);
      return copy;
    });
    setItems((a) => {
      const copy = JSON.parse(JSON.stringify(a));
      copy[index] = false;
      return copy;
    });
  };

  return (
    <InvoiceContext.Provider
      value={{
        formData,
        updateFormData,
        updateItems,
        addItem,
        removeItem,
        subTotal,
      }}
    >
      {props.children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceState;
