import { useContext,} from "react";
import InvoiceContext from "../../context/InvoiceContext/InvoiceContext";
import Input from "../Input/Input";
import PrivewModal from "../PreviewModal/PreviewModal";

const ShareInvoice = () => {
  const {updateFormData, invoice, generateInvoice } = useContext(InvoiceContext);


  return (
      <div className=" px-5 flex flex-col ">
        <button className="btn btn-primary m-1" onClick={() => generateInvoice()}>Generate Invoice</button>
        
        <div className="flex justify-between my-3">
          {invoice.fileName ?  <div className="indicator">
        <span className="indicator-item badge badge-secondary"></span>
          <button className="btn w-32">Download</button>
          </div> :           <button className="btn w-32" disabled>Download</button>
 }
      
          <PrivewModal fileName = {invoice.fileName}/>
        </div>
        <hr />
        <span className="text-md my-4 font-medium">Currency </span>
        <Input
          label="INR (Indian National Rupee)"
          name="currency"
          type="text"
          {...{ disabled: true }}
        />
        <div className="flex flex-col">
          <span className="text-md my-4 font-medium">Payment Method</span>
          <label className="flex items-center">
            <input
              type="radio"
              name="radio-1"
              className="radio-xs radio-primary"
              onClick={() => updateFormData("payment_type", "cash")}
              defaultChecked
            />
            <span className="text-md px-2">Cash</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="radio-1"
              className="radio-xs radio-primary"
              onClick={() => updateFormData("payment_type", "cheque")}
            />
            <span className="text-md px-2">Cheque</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="radio-1"
              className="radio-xs radio-primary"
              onClick={() => updateFormData("payment_type", "upi")}
            />
            <span className="text-md px-2">UPI</span>
          </label>
        </div>
      </div>
  );
};

export default ShareInvoice;
