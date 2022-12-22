import axios from "axios"

const createInvoice = async (invoiceData: any) => {
    const response = await axios.post(process.env.REACT_APP_API_URL + "/invoice/create", {
      customer_name: invoiceData.customer_name,
      customer_address: invoiceData.customer_address,
      items: invoiceData.items,
      gst: invoiceData.gst,
      discount: invoiceData.discount,
      notes: invoiceData.notes,
      received_amount: invoiceData.received_amount,
      payment_type: invoiceData.payment_type,
    })
    return response.data
}

export default createInvoice;