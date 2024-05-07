import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/api/"
})

export const getProducts = async () => {
    const resp = await axiosInstance.get("/products")
    return resp.data;
}

export const postMessage = async body => {
    const resp = await axiosInstance.post("/messages", body)
    return resp.data;
} 

export const postProducts = async body => {
    const formData = new FormData()
    Object.entries(body).forEach(([key, value]) => {
        formData.append(key, value)
    })
    const resp = await axiosInstance.post("/products", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
    return resp.data;
} 