const baseURL = "http://localhost:3030"

export const login = async (email, password) => {
    let res = await fetch(`${baseURL}/users/login`, { 
        method: 'POST',
        headers:  {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    let jsonResult = await res.json();
    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }

    // ---> Another choice without async finction <---
    // let [boolean, data] = Promise.all([res.ok, res.json])
    // if (boolean = true) {
    //     return data.message;
    // }else {
    //     throw Error(data.message);
    // }
};

export const logout = (token) => {
    return fetch(`${baseURL}/users/logout`, {
        headers: {
            'X-Authorization': token,
        }
    })
};
