import InvoiceTemplate from "../../components/InvoiceTemplate/InvoiceTemplate";
import ShareInvoice from '../../components/Share Invoice/ShareInvoice';

const Invoice = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="bg-slate-200 p-20 rounded-lg">
        <div className="bg-slate-100 p-20 rounded-3xl flex">
          <InvoiceTemplate />
          <ShareInvoice />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
