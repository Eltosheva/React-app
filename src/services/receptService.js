import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const getAll = () => request.get(`${baseUrl}/recepts`);

export const getOne = (receptId, signal) => {
    return fetch(`${baseUrl}/recepts/${receptId}`, { signal })
        .then(res => res.json())
};

export const add = async (receptData, token) => {
    
    let response = await fetch(`${baseUrl}/recepts`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify(receptData)
    });
    console.log(response);
    let result = await response.json();
    return result;
};

export const getMyRecepts = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}/recepts?where=${query}`);
};

export const update = (receptId, receptData) => request.put(`${baseUrl}/recepts/${receptId}`, receptData);

export const destroy = async (receptId, token) => {
    return fetch(`${baseUrl}/recepts/${receptId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};

// export const like = (receptId, recept, token) => {
//     return fetch(`${baseUrl}/recepts/${receptId}`, {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json',
//             'X-Authorization': token
//         },
//         body: JSON.stringify(recept)
//     }).then(res => res.json());
// };
