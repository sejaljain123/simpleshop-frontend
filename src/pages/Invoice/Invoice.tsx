import InvoiceTemplate from "../../components/InvoiceTemplate/InvoiceTemplate";
import ShareInvoice from "../../components/Share Invoice/ShareInvoice";
import InvoiceState from "../../context/InvoiceContext/InvoiceState";

const Invoice = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="bg-slate-200 p-10 rounded-lg">
        <div className="bg-slate-100 p-20 rounded-3xl flex">
          <InvoiceState>
            <InvoiceTemplate />
            <ShareInvoice />
          </InvoiceState>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
