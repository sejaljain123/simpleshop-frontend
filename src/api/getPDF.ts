import axios from "axios"

const getPDF = async (fileName: string) => {
    const response = await axios.get(process.env.REACT_APP_API_URL + `/invoice/pdf/${fileName}`)
    return response.data
}

export default getPDF