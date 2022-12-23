import axios from "axios"

const createInvoice = async (invoiceData: any) => {
  console.log("invoiceData", invoiceData)
    const response = await axios.post(process.env.REACT_APP_API_URL + "/invoice/create", {
     ...invoiceData
    })
    return response.data
}

export default createInvoice;