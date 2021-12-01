 export const login = async (email, password) => {
    let res = await fetch('http://localhost:3030/users/login', { //dannite sa ot servera 
        method: 'POST',
        headers:  {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    let jsonResult = res.json();
    return jsonResult;
};