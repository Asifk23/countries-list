import axios from "axios";



export const GET_API = async (params, path) => {
    let headers = ''
    const token = ''

    if (token) {
        headers = { 'Authorization': `Token ${token}` }
    } else {
        headers = ''
    }



    if (params != '') {
        console.log('Params in GET API', params)
        var config = {
            method: 'get',
            url: path + '?' + params,
            headers: headers,

        };
    }
    else {
        console.log('No params in GET API', params)
        var config = {
            method: 'get',
            url: path,
            headers: headers,

        };
    }

    console.log('GET API config', config)

    let response = await axios(config)
        .then(function (res) {
            console.log("GET API response", res)
            return res
        })
        .catch(function (error) {
            console.log("GET API error", error)
            if (error.response) {
                return error.response
            } else {
                return { status: 503, message: "Assumming Server is not running" }
            }
        });

    return response

}












