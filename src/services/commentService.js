import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const comment = (userId, receptId) => request.post(`${baseUrl}/comments`, {userId, receptId});

export const getReceptComments = (receptId) => {
    const query = encodeURIComponent(`receptId="${receptId}"`);

    return request.get(`${baseUrl}/comments?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId));
};