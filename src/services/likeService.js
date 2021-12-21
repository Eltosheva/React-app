import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const like = (userId, receptId) => request.post(`${baseUrl}/likes`, {userId, receptId});

export const getReceptLikes = (receptId) => {
    const query = encodeURIComponent(`receptId="${receptId}"`);

    return request.get(`${baseUrl}/likes?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId));
};