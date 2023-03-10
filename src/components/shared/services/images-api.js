import axios from "axios";

const instance = axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
        key: "32330894-ccb69e0fba1ba19d2c253cc36",
        image_type: "photo",
        orientation: "horisontal",
        per_page: "12",
    }
})

export const searchImages = async (q, page) => {
    const { data } = await instance.get(``, {
        params: {
            q,
            page,
        }
    });
    return data;
}