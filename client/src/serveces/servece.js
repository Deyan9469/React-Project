import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/bedsheet'

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return Object.values(result);
};