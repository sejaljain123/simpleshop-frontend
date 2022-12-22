/* eslint-disable @typescript-eslint/no-unused-vars */
import { MdCloudUpload, MdDelete } from "react-icons/md";
import Input from "../../components/Input/Input";
import { useState } from "react";
import Button from "../Button/Button";
import invoiceData from "./InvoiceData";

const inputStyles = "m-1 bg-slate-100 w-4/5";
const spanStyles = "text-md py-2 text-base text-blue-600";
const spanStyles2 = "text-md py-2 text-base font-medium";
const disabled = { disabled: true };

const InvoiceTemplate = () => {
  const [formData, setFormData] = useState(invoiceData);
  const [items, setItems] = useState({});
  const [subTotal, setSubTotal] = useState(0.0);
  const [cgst, setCGST] = useState(0);
  const [sgst, setSGST] = useState(0);
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

  const isFirstItem = () => {
    return !(formData.items.length === 1);
  };

  const cal_cgst = (subTotal * cgst) / 100;
  const cal_sgst = (subTotal * sgst) / 100;
  const totalAmount = subTotal + cal_cgst + cal_sgst - formData.discount;
  const balanceAmount = totalAmount - formData.received_amount;

  return (
    <div className="rounded-lg bg-white w-4/5 p-10">
      <div className="flex justify-center rounded-full w-20 shadow-lg m-auto">
        <MdCloudUpload size={50} />
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="flex items-center">
          <label className="text-md font-medium">Date:</label>
          <Input
            label="Date"
            name="date"
            type="date"
            onChange={(e) => updateFormData("date", e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <label className="text-md font-medium">Due Date:</label>
          <Input label="Date" name="date" type="date" />
        </div>
      </div>
      <span className="font-bold text-center text-lg">
        <h1>INVOICE #{invoiceData.id}</h1>
      </span>
      <hr className="p-2" />
      <div className="flex justify-between flex-wrap">
        <div className="flex flex-col">
          <span className="text-xl p-2 text-base font-bold">Bill from:</span>
          <span className={spanStyles2}>SATISH ABHUSHAN KENDRA</span>
          <span className={spanStyles2}>
            Pachraha, Gwalior Road, Pachraha, Etawah,
            <br /> 206001, Uttar Pradesh
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl p-2 text-base font-bold">Bill to:</span>
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
      <hr className="my-2" />
      <div className="grid grid-cols-5 text-center">
        <span>Item Name</span>
        <span>Weight (gm)</span>
        <span>Rate (per 10 gm)</span>
        <span>Amount (Rs)</span>
        <span>Action</span>
      </div>
      <hr className="my-2" />
      {formData.items.map((item, index) => {
        return (
          <div className="grid grid-cols-5 mt-1 px-1">
            <Input
              label="Item Name"
              name="name"
              type="text"
              value={item.name}
              onChange={(e) => updateItems(index, "name", e.target.value)}
              styles={inputStyles}
            />
            <Input
              label="Weight"
              name="weight"
              type="number"
              value={item.weight}
              onChange={(e) => updateItems(index, "weight", e.target.value)}
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
              styles={inputStyles}
              {...disabled}
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
      <hr className="my-2" />
      <div className="flex justify-between">
        <div className="flex flex-col w-[50%]">
          <span className="text-md py-2 text-base">
            Does your invoice include GST:{" "}
          </span>
          <label className="cursor-pointer w-1/5 flex items-center">
            <input
              type="radio"
              name="radio-1"
              className="radio-xs radio-primary"
              onClick={() => updateFormData("gst", true)}
            />
            <span className="text-md px-2">Yes</span>
          </label>
          <label className="cursor-pointer w-1/5 flex items-center">
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
          <div className="flex justify-between items-center">
            <span className={spanStyles2}>Subtotal (Rs): </span>
            <Input
              label="SubTotal"
              name="subtotal"
              type="text"
              value={subTotal}
              styles="input-ghost w-4/5 m-1"
            />
          </div>
          {formData.gst ? (
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className={spanStyles}>CGST (%): </span>
                <Input
                  label="Enter CGST"
                  name="gst"
                  type="number"
                  value={cgst ? cgst : undefined}
                  onChange={(e) => setCGST(e.target.value)}
                  styles="input-ghost w-4/5 m-1 "
                />
                <Input
                  label="Calculated CGST"
                  name="calculatedCGST"
                  type="text"
                  value={cal_cgst}
                  styles="input-ghost w-4/5 m-1 "
                />
              </div>
              <div className="flex items-center">
                <span className={spanStyles}>SGST (%): </span>
                <Input
                  label="Enter SGST"
                  name="sgst"
                  type="number"
                  value={sgst ? sgst : undefined}
                  onChange={(e) => setSGST(e.target.value)}
                  styles="input-ghost w-4/5 m-1"
                />
                <Input
                  label="Calculated SGST"
                  name="calculatedSGST"
                  type="text"
                  value={cal_sgst}
                  styles="input-ghost w-4/5 m-1"
                />
              </div>
            </div>
          ) : null}
          <div className="flex justify-between items-center">
            <span className={spanStyles}>Add Discount: </span>
            <Input
              label="Add discount"
              name="discount"
              type="number"
              value={formData.discount ? formData.discount : undefined}
              onChange={(e) => updateFormData("discount", e.target.value)}
              styles="input-ghost w-4/5 m-1"
            />
          </div>
          <hr className="py-0" />
          <div className="flex justify-between items-center">
            <span className={spanStyles2}>Total Amount (Rs):</span>
            <Input
              label="Total Amount"
              name="total_amount"
              type="text"
              value={totalAmount}
              styles="m-1 w-4/5"
            />
          </div>
          <div className="flex justify-between items-center">
            <span className={spanStyles2}>Received Amount (Rs):</span>
            <Input
              label="Received Amount"
              name="received_amount"
              type="text"
              onChange={(e) =>
                updateFormData("received_amount", e.target.value)
              }
              styles="m-1 w-4/5"
            />
          </div>
          <div className="flex justify-between items-center">
            <span className={spanStyles2}>Balance Amount (Rs):</span>
            <Input
              label="Balance Amount"
              name="balance_amount"
              type="text"
              value={balanceAmount}
              styles="m-1 w-4/5"
            />
          </div>
        </div>
      </div>
      <hr className="my-2" />
      <div className="flex flex-col">
        <span className={spanStyles}>Notes:</span>
        <input
          placeholder="Thank You"
          className="input input-bordered w-full"
          name="notes"
          type="text"
          onChange={(e) => updateFormData("notes", e.target.value)}
        />
      </div>
    </div>
  );
};

export default InvoiceTemplate;
