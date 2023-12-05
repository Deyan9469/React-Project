import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    return result;
};

export const create = async (_ownerId, username, content) => {
    const newComment = await request.post(baseUrl, {
        _ownerId,
        username,
        content,
    });

    return newComment;
};
export const remove = async (id) => request.remove(`${baseUrl}/${id}`);