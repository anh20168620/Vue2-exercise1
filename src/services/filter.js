import { fetch } from "../utils";

export const fetchProduct = async (params = {}) => {
    const res = await fetch.post(`filters/filter`, params)
    return res.data
}
