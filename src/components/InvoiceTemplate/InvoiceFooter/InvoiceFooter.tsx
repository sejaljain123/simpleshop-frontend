import { useContext } from 'react';
import InvoiceContext from '../../../context/InvoiceContext/InvoiceContext';
const InvoiceFooter = () => {
  const {updateFormData} = useContext(InvoiceContext);
  return(
    <div className="flex flex-col">
        <span className="text-md py-2 text-base text-blue-600">Notes:</span>
        <textarea className="textarea mt-4 bg-slate-100  " placeholder="Thank You!" name="address" onChange={(e) => updateFormData("notes", e.target.value)}></textarea>
      </div>
  )
}

export default InvoiceFooter;