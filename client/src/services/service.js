import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/bedsheets'

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return Object.values(result);
};

export const getOne = async (bedsheetId) => {
    const result = await request.get(`${baseUrl}/${bedsheetId}`, );

    return result;
}

export const create = async (bedsheetData) => {
    const result = await request.post(baseUrl, bedsheetData);

    return result;
};

export const edit = async (bedsheetId, bedsheetData) => {
    const result = await request.put(`${baseUrl}/${bedsheetId}`, bedsheetData);

    return result;
};

export const remove = async (bedsheetId) => request.remove(`${baseUrl}/${bedsheetId}`);