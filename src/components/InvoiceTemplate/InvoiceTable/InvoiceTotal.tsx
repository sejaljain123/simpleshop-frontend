import { useContext, useState } from "react";
import InvoiceContext from "../../../context/InvoiceContext/InvoiceContext";
import Input from "../../Input/Input";

const InvoiceTotal = () => {
  const { updateFormData, formData, subTotal } = useContext(InvoiceContext);
  
  const [cgst, setCGST] = useState(1.5);
  const [sgst, setSGST] = useState(1.5);

  const spanStyles = "text-md py-2 text-base text-blue-600";
  const spanStyles2 = "text-md py-2 text-base font-medium";
  const disabled = { disabled: true };

  const cal_cgst = (subTotal * cgst) / 100;
  const cal_sgst = (subTotal * sgst) / 100;
  let totalAmount = 0;
  {formData.gst ? 
    totalAmount = subTotal + cal_cgst + cal_sgst - formData.discount
  : totalAmount = subTotal - formData.discount
  }
  
  const balanceAmount = totalAmount - formData.received_amount;

  return (
    <div className="flex justify-between mt-4">
      <div className="flex flex-col w-1/3">
        <span className="text-base">Does your invoice include GST: </span>
        <label className="cursor-pointer w-1/5 flex items-center">
          <input
            type="radio"
            name="radio1"
            className="radio-xs radio-primary"
            onClick={() => updateFormData("gst", true)}
          />
          <span className="text-md px-2">Yes</span>
        </label>
        <label className="cursor-pointer w-1/5 flex items-center">
          <input
            type="radio"
            name="radio1"
            className="radio-xs radio-primary"
            onClick={() => updateFormData("gst", false)}
            defaultChecked
          />
          <span className="text-md px-2">No</span>
        </label>
      </div>
      <div className="flex flex-col w-1/2  ">
        <div className="grid grid-cols-2">
          <span className={spanStyles2}>Sub Total: </span>
          <Input
            label="Sub Total"
            name="Sub Total"
            type="text"
            value={subTotal}
            styles=" text-right"
            {...disabled}
          />
        </div>
        {formData.gst ? (
          <>
            <div className="grid grid-cols-2 mt-2">
              <span className={spanStyles}>CGST (%): </span>
              <div className="flex">
                <Input
                  label="Enter CGST"
                  name="gst"
                  type="number"
                  value={cgst}
                  onChange={(e) => setCGST(e.target.value)}
                  styles="w-4/5"
                />
                <Input
                  label="Calculated CGST"
                  name="calculatedCGST"
                  type="text"
                  value={cal_cgst}
                  styles=" text-right"
                  {...disabled}
                />
              </div>
            </div>
            <div className="grid grid-cols-2  mt-2">
              <span className={spanStyles}>SGST (%): </span>
              <div className="flex ">
                <Input
                  label="Enter SGST"
                  name="sgst"
                  type="number"
                  value={sgst}
                  onChange={(e) => setSGST(e.target.value)}
                  styles="bg-slate-00 w-4/5 "
                />
                <Input
                  label="Calculated SGST"
                  name="calculatedSGST"
                  type="text"
                  value={cal_sgst}
                  styles=" text-right"
                  {...disabled}
                />
              </div>
            </div>
          </>
        ) : null}
        <div className="grid grid-cols-2 mt-2">
          <span className={spanStyles}>Add Discount: </span>

          <Input
            label="Add discount"
            name="discount"
            type="text"
            value={formData.discount}
            onChange={(e) => updateFormData("discount", e.target.value)}
            styles="text-right"
          />
        </div>
        <div className="grid grid-cols-2 mt-2">
          <span className={spanStyles2}>Total Amount (Rs):</span>
          <Input
            label="Total Amount"
            name="total_amount"
            type="text"
            value={totalAmount}
            styles=" text-right"
            {...disabled}
          />
        </div>
        <div className="grid grid-cols-2 mt-2">
          <span className={spanStyles2}>Received Amount (Rs):</span>
          <Input
            label="Received Amount"
            name="received_amount"
            type="text"
            value={formData.received_amount}
            onChange={(e) => updateFormData("received_amount", e.target.value)}
            styles="text-right"
          />
        </div>
        <div className="grid grid-cols-2 mt-2">
          <span className={spanStyles2}>Balance Amount (Rs):</span>

          <Input
            label="Balance Amount"
            name="balance_amount"
            type="text"
            value={balanceAmount}
            styles=" text-right"
            {...disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceTotal;
