import { createContext } from 'react';
import invoiceData from '../../components/InvoiceTemplate/InvoiceData';

const InvoiceContext = createContext({
  formData: invoiceData,
  updateFormData: (field: string, value: any) => { },
  updateItems: (index: number, field: string, value: any) => { },
  addItem: () => { },
  removeItem: (index: number) => { },
  subTotal: 0,
  invoice: {
    invoice_id: 0,
    fileName: "",
  },
  generateInvoice: () => { },
})

export default InvoiceContext