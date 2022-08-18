import instance from "../utils/instance";

export const fetchProduct = async (path, params = {}) => {
    try {
        const res = await instance.post(path, params)
        return res.data
    } catch (error) {
        console.log(error);
    }
}
