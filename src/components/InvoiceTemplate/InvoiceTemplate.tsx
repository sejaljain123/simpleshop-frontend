import invoiceData from "./InvoiceData";
import InvoiceHeader from "./InvoiceHeader/InvoiceHeader";
import InvoiceAddress from "./InvoiceHeader/InvoiceAddress";
import ItemTable from "./InvoiceTable/ItemTable";
import InvoiceTotal from "./InvoiceTable/InvoiceTotal";
import InvoiceFooter from "./InvoiceFooter/InvoiceFooter";
import { useContext } from "react";
import InvoiceContext from "../../context/InvoiceContext/InvoiceContext";


const InvoiceTemplate = ({...props}) => {

  return (
    <div className="rounded-lg bg-white w-4/5 p-10">
      <InvoiceHeader />
      <h1 className="font-bold text-center text-lg">INVOICE #{props.invoiceNumber}</h1>
      <hr />
      <InvoiceAddress />
      <hr className="my-2" />
      <ItemTable />
      <InvoiceTotal />
      <hr className="my-2" />
      <InvoiceFooter />
    </div>
  );

};

export default InvoiceTemplate;
