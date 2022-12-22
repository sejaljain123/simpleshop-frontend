import { FiSend } from "react-icons/fi";
import Input from "../Input/Input";
import PrivewModal from '../PreviewModal/PreviewModal';

const ShareInvoice = () => {
  return (
    <div className="p-3 flex flex-col ">
      <button className="btn btn-primary m-1">
        <FiSend />
        Share Invoice
      </button>
      <div className="flex justify-around">
      <button className="btn m-1 w-1/2">Download</button>
      <PrivewModal />
      </div>
      <hr />
      <span className="text-md mt-4 p-3 font-medium">
        Currency{" "}
        <Input
          label="INR (Indian National Rupee)"
          name="currency"
          type="text"
          styles="m-1"
          {...{ disabled: true }}
        />
      </span>
      <div className="flex flex-col p-3">
        <span className="text-md mt-4 p-3 font-medium">Payment Method</span>
        <label>
          <input
            type="radio"
            name="radio-1"
            className="radio-xs radio-primary"
          />
          <span className="text-md px-2">Cash</span>
        </label>
        <label>
          <input
            type="radio"
            name="radio-1"
            className="radio-xs radio-primary"
          />
          <span className="text-md px-2">Cheque</span>
        </label>
        <label>
          <input
            type="radio"
            name="radio-1"
            className="radio-xs radio-primary"
          />
          <span className="text-md px-2">UPI</span>
        </label>
      </div>
    </div>
  );
};

export default ShareInvoice;
