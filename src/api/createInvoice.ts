import axios from "axios"

const createInvoice = async (invoiceData: any) => {
  try{
    const response = await axios.post(process.env.REACT_APP_API_URL + "/invoice/create", {
     ...invoiceData
    })
    console.log(response, "response")
    return response.data
  } catch (error) {
    return
  }
  
}

export default createInvoice;