import { MdCloudUpload, MdDelete } from "react-icons/md";
import Input from "../../components/Input/Input";
import { useState } from "react";
import Button from "../Button/Button";

const invoiceData = {
  id: "",
  date: "",
  customer_name: "",
  customer_address: "",
  items: [
    {
      name: "",
      type: "",
      weight: 0,
      quantity: 0,
      rate: 0,
      amount: 0,
      unit: "gm",
    },
  ],
  gst: false,
  discount: 0,
  notes: "",
};

const inputStyles = "m-1 bg-slate-100";
const spanStyles = "text-md py-2 text-base text-blue-600"

const InvoiceTemplate = () => {
  const [formData, setFormData] = useState(invoiceData);
  const [items, setItems] = useState({});
  const [gst, setGST] = useState(0);
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
      const amount =
        (copy.items[index].quantity *
          copy.items[index].weight *
          copy.items[index].rate) /
        10;
      copy.items[index][amount] = amount;
      return copy;
    });
  };

  const addItem = () => {
    setFormData((a) => {
      const copy = JSON.parse(JSON.stringify(a));
      copy.items.push({
        name: "",
        type: "",
        weight: 0,
        quantity: 0,
        rate: 0,
        amount: 0,
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

  const isFirstItem = () => {
    return !(formData.items.length === 1);
  };

  return (
    <div className="rounded-lg bg-white w-4/5 p-10">
      <div className="flex justify-center rounded-full w-20 shadow-lg m-auto">
        <MdCloudUpload size={50} />
      </div>
      <div className="flex flex-wrap justify-between">
        <div>
          <label className="text-xl mt-2">Date:</label>
          <Input
            label="Date"
            name="date"
            type="date"
            onChange={(e) => updateFormData("date", e.target.value)}
          />
        </div>
        <div>
          <label className="text-xl mt-2 ">Due Date:</label>
          <Input label="Date" name="date" type="date" />
        </div>
      </div>
      <span className="font-bold text-center text-lg">
        <h1>INVOICE #{invoiceData.id}</h1>
      </span>
      <hr />
      <div className="flex justify-between flex-wrap">
        <div className="flex flex-col">
          <span className="text-xl p-2 text-base">Bill from:</span>
          <Input label="Name" name="name" type="text" styles={inputStyles} />
          <Input
            label="Address"
            name="address"
            type="text"
            styles={inputStyles}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xl p-2 text-base">Bill to:</span>
          <Input
            label="Name"
            name="name"
            type="text"
            onChange={(e) => updateFormData("customer_name", e.target.value)}
            styles={inputStyles}
          />
          <Input
            label="Address"
            name="address"
            type="text"
            onChange={(e) => updateFormData("customer_address", e.target.value)}
            styles={inputStyles}
          />
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-7 text-center">
        <span>Item Name</span>
        <span>Type</span>
        <span>Weight</span>
        <span>Quantity</span>
        <span>Rate</span>
        <span>Amount</span>
        <span>Action</span>
      </div>
      <hr />
      {formData.items.map((item, index) => {
        return (
          <div className="grid grid-cols-7 mt-1 px-1">
            <Input
              label="Item Name"
              name="name"
              type="text"
              value={item.name}
              onChange={(e) => updateItems(index, "name", e.target.value)}
              styles={inputStyles}
            />
            <select
              defaultValue="type"
              className="select select-bordered w-full max-w-xs m-1 bg-slate-100 "
              onChange={(e) => updateItems(index, "type", e.target.value)}
            >
              <option selected disabled />
              <option>Gold</option>
              <option>Silver</option>
            </select>
            <Input
              label="Weight"
              name="weight"
              type="number"
              value={item.weight}
              onChange={(e) => updateItems(index, "weight", e.target.value)}
              styles={inputStyles}
            />
            <Input
              label="Quantity"
              name="quantity"
              type="number"
              value={item.quantity}
              onChange={(e) => updateItems(index, "quantity", e.target.value)}
              styles={inputStyles}
            />
            <Input
              label="Rate"
              name="rate"
              type="number"
              value={item.rate}
              onChange={(e) => updateItems(index, "rate", e.target.value)}
              styles={inputStyles}
            />
            <Input
              label="Amount"
              name="amount"
              type="text"
              value={formData.items[index].amount}
              // onChange={(e) => updateItems(index, "amount", e.target.value)}
              styles={inputStyles}
            />
            {isFirstItem() ? (
              <MdDelete
                className="m-auto cursor-pointer"
                onClick={() => removeItem(index)}
                size={30}
              />
            ) : (
              <MdDelete className="m-auto" size={30} color="gray" />
            )}
          </div>
        );
      })}
      <Button type="button" label="Add Item" onClick={() => addItem()} />
      <hr />
      <div className="flex">
      <div className="flex flex-col w-[50%]">
        <span className="text-md py-2 text-base">
          Does your invoice include GST:{" "}
        </span>
        <label className="cursor-pointer">
          <input
            type="radio"
            name="radio-1"
            className="radio-xs radio-primary"
            onClick={() => updateFormData("gst", true)}
          />
          <span className="text-md px-2">Yes</span>
        </label>
        <label className="cursor-pointer">
          <input
            type="radio"
            name="radio-1"
            className="radio-xs radio-primary"
            onClick={() => updateFormData("gst", false)}
          />
          <span className="text-md px-2">No</span>
        </label>
      </div>
      <div className="flex content-end flex-col">
      
      {formData.gst ? (
        <>
        <span className={spanStyles}>Enter GST: </span>
        <Input
          label="Enter GST"
          name="gst"
          type="number"
          value={gst}
          onChange={(e) => setGST(e.target.value)}
          styles={inputStyles}
        />
        </>
      ) : null}
        <div className="flex flex-col">
        <span className={spanStyles}>Add Discount: </span>
        <Input
          label="Add discount"
          name="discount"
          type="number"
          value={formData.discount}
          onChange={(e) => updateFormData("discount",e.target.value)}
          styles={inputStyles}
        />
          <span className={spanStyles}>Total Amount:</span>
          <Input
            label="Total Amount"
            name="total_amount"
            type="text"
            styles={inputStyles}
          />
        </div>
      </div>
      </div>
      <hr />
      <div className="flex flex-col">
        <span className={spanStyles}>Notes:</span>
        <Input label="Thank You!" name="notes" type="text" onChange={(e) => updateFormData("notes", e.target.value)}
        styles="w-100" />
      </div>
    </div>
  );
};

export default InvoiceTemplate;
