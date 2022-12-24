import { useContext, useEffect, useState } from "react";
import InvoiceTemplate from "../../components/InvoiceTemplate/InvoiceTemplate";
import ShareInvoice from "../../components/Share Invoice/ShareInvoice";
import InvoiceState from "../../context/InvoiceContext/InvoiceState";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import getInvoiceNumber from "../../api/getInvoiceNumber";
import InvoiceContext from "../../context/InvoiceContext/InvoiceContext";
import Toast from "../../components/Toast/toast";

const Invoice = () => {
  const navigate = useNavigate();
    const {isAuthenticated} = useContext(AuthContext);
    const {error,invoice} = useContext(InvoiceContext);
    const [invoiceNumber, setInvoiceNumber] = useState(0);
    useEffect(() => {
        const getInvoiceNum = async () => {
            const response = await getInvoiceNumber();
            setInvoiceNumber(response.data + 1);
        };
        getInvoiceNum();
        if(!isAuthenticated){
            navigate('/login');
        }
    }, [isAuthenticated]);

  return (
    <div className="bg-white rounded-lg">
      <div className="bg-slate-200 p-10 rounded-lg">
        <div className="bg-slate-100 p-20 rounded-3xl flex">
            <InvoiceTemplate invoiceNumber = {invoiceNumber} />
            <ShareInvoice />
        </div>
      </div>
      {error ? <Toast message={'Something went Wrong, Try Again!'} />:''}
      {invoice.fileName.length > 0 ? <Toast message={'Invoice Created Successfully'} />:''}
    </div>
  );
};

export default Invoice;
