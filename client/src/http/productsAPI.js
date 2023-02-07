import { $authHost, $host } from "./api";
import jwt_decode from 'jwt-decode'

export const createWriter = async (name) => {
    const { data } = await $authHost.post('product/writer', name);
    return data;
}

export const fetchWriters = async () => {
    const { data } = await $host.get('product/writer');
    return data;
}

export const createGenre = async (name) => {
    const { data } = await $authHost.post('product/genre', name);
    return data;
}

export const fetchGenres = async () => {
    const { data } = await $host.get('product/genre');
    return data;
}

export const createProduct = async (product) => {
    const { data } = await $authHost.post('product', product, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return data;
}

export const updateProduct = async (id, product) => {
    const { data } = await $authHost.put(`product/${id}`, product, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return data;
}

export const fetchProducts = async (writerId, genreId, page, limit, titleLowerCase) => {
    const { data } = await $host.get('product', {
        params: {
            writerId, genreId, page, limit, titleLowerCase
        }
    });
    return data;
}

export const fetchOneProduct = async (id) => {
    const { data } = await $host.get(`product/${id}`);
    return data;
}

export const deleteProduct = async (id) => {
    const { data } = await $authHost.delete(`product/${id}`);
    return data
}

export const addToBasket = async (productId, writerId, genreId) => {
    const { data } = await $authHost.post('basket', productId, writerId, genreId)
    return data
}

export const getBasket = async () => {
    const { data } = await $authHost.get('basket')
    return data
}

export const cleanBasket = async () => {
    const { data } = await $authHost.delete('basket/clean/0')
    return data
}

export const removeFromBasket = async (productId) => {
    const { data } = await $authHost.delete(`basket/${productId}`)
    return data
}

export const getRatingForProduct = async (productId) => {
    const { data } = await $host.get(`product/rating/${productId}`);
    return data
}

export const postRatingForProduct = async (productId, rate) => {
    const { data } = await $authHost.post('product/rating', productId,
        rate);
    return data
}

export const removeRatingForProduct = async (productId) => {
    const { data } = await $authHost.delete(`product/rating/${productId}`);
    return data
}

export const updateRatingForProduct = async (productId, rate) => {
    const { data } = await $authHost.put(`product/rating/${productId}`, rate);
    return data
}