const baseURL = 'http://localhost:3030/data';

export const getAll = async() => {
    let response = await fetch(`${baseURL}/home`)

    let recepts =  await response.json();

    let result = Object.values(recepts);

    return result;
};

export const add =  async (receptData, token) => {
    let response = await fetch(`${baseURL}/addRecepts`, {
        method: 'POST', 
        headers: {
            'content-type': 'application/json',
            'X-Authorization': 'token'
        },
        body: JSON.stringify(receptData)
    });

    let result = await response.json();

    return result;
}
