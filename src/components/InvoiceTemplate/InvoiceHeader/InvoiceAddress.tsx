import { useContext } from 'react';
import InvoiceContext from '../../../context/InvoiceContext/InvoiceContext';
import Input from "../../Input/Input";

const InvoiceAddress = () => {
  const {updateFormData} = useContext(InvoiceContext);
  return(
    <div className="flex justify-between mt-4">
        <div className="flex flex-col">
          <p className="text-base font-bold mb-2">Bill from:</p>
          <p className="text-base font-bold mt-2">SATISH ABHUSHAN KENDRA</p>
          <span className="text-sm mt-2">
            Pachraha, Gwalior Road, Pachraha, Etawah,
            <br /> 206001, Uttar Pradesh
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-base font-bold mb-2">Bill to:</span>
          <Input
            label="Name"
            name="name"
            type="text"
            onChange={(e) => updateFormData("customer_name", e.target.value)}
            styles=""
          />
          <textarea className="textarea mt-4 bg-slate-100  " placeholder="Address" name="address" onChange={(e) => updateFormData("customer_address", e.target.value)}></textarea>

        </div>
      </div>
  )
}

export default InvoiceAddress;