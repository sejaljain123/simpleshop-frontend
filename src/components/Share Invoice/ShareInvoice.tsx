import Input from "../Input/Input";
import PrivewModal from '../PreviewModal/PreviewModal';

const ShareInvoice = () => {
  return (
    <div className=" px-5 flex flex-col ">
      <button className="btn btn-primary m-1">
        Generate Invoice
      </button>
      <div className="flex justify-between my-3">
      <button className="btn w-32">Download</button>
      <PrivewModal />
      </div>
      <hr />
      <span className="text-md my-4 font-medium">
        Currency{" "}
        </span>
        <Input
          label="INR (Indian National Rupee)"
          name="currency"
          type="text"
          {...{ disabled: true }}
        />
     
      <div className="flex flex-col">
        <span className="text-md my-4 font-medium">Payment Method</span>
        <label>
          <input
            type="radio"
            name="radio-1"
            className="radio-xs radio-primary"
            checked
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
