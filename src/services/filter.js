import instanceAxios from "../utils/instanceAxios";

export const fetchProduct = async (path, params = {}) => {
    try {
        const res = await instanceAxios.post(path, params)
        return res.data
    } catch (error) {
        console.log(error);
    }
}
