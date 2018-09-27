const configUrl = 'https://config.jaga-api.com/admin/mobile/v1/config.json';

const addConfig = data => {
    return {
        type: "ADD_CONFIG",
        payload: data
    }
}

export const addUser = payload => {
    return {
        type: "ADD_USER",
        payload
    }
}

const getConfig = () => {
    return fetch(configUrl, {
        headers: {
          'Cache-Control': 'no-cache'
        }
      })
}

export const fetchConfig = () => {
    return (dispatch)=>{
        getConfig()
        .then(res=> res.json())
        .then(json=>{
            console.log("json @ fetchConfig", json );
            return dispatch(addConfig(json))})
        .catch(err=>console.error(err));
    }
}