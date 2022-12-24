import axios from "axios";

const getInvoiceNumber = async () => {
    const response = await axios.get(process.env.REACT_APP_API_URL + "/invoice/count");
    return response.data;
    }

export default getInvoiceNumber;