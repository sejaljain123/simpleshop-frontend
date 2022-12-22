import { useContext } from "react";
import { MdCloudUpload } from "react-icons/md";
import Input from "../../Input/Input";
import InvoiceContext from '../../../context/InvoiceContext/InvoiceContext';

const InvoiceHeader = () => {
  const { updateFormData } = useContext (InvoiceContext);
  return(
    <div className="flex justify-between  w-full ">
        <div className="flex items-center">
          <label className="text-md font-medium mr-2">Date:</label>
          <Input
            label="Date"
            name="date"
            type="date"
            onChange={(e) => updateFormData("date", e.target.value)}
          />

        </div>
        <MdCloudUpload size={50} />

        <div className="flex items-center">
          <label className="text-md font-medium mr-2">Due Date:</label>
          <Input label="Date" name="date" type="date" />
        </div>
      </div>
  )
}

export default InvoiceHeader;