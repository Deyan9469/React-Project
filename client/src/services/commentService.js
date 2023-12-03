import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return Object.values(result);
};

export const create = async (id, text) => {
    const newComment = await request.post(baseUrl, {
        id,
        text,
    });

    return newComment;
};
