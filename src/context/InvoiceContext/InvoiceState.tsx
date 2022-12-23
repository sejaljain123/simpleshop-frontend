import { useState } from "react";
import invoiceData from "../../components/InvoiceTemplate/InvoiceData";
import InvoiceContext from "./InvoiceContext";
import createInvoice from "../../api/createInvoice";

const InvoiceState = (props: any) => {
  const [formData, setFormData] = useState(invoiceData);
  const [items, setItems] = useState({});
  const [subTotal, setSubTotal] = useState(0.0);
  const [invoice, setInvoice] = useState({
    invoice_id: 0,
    fileName: "",
  });


  const generateInvoice = async () => {
    const response = await createInvoice(formData);
    setInvoice({
      invoice_id: response.data.invoice_id,
      fileName: response.data.fileName,
    });
    return;
  }
  
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
        invoice,
        generateInvoice
      }}
    >
      {props.children}
    </InvoiceContext.Provider>
  );
};

export default InvoiceState;
