import axios from "axios";

const login = async (username: string, password: string) => {

    try{
    const response = await axios.post(
        process.env.REACT_APP_API_URL + "/auth/login",
        {
        username,
        password,
        }
    );
    console.log(response, "reserrorponse");
    return response.data;
    } catch (error) {
        return
    }
    }

export default login;