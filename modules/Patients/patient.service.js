// import config from '../../config';

//dummy url reassignment
const config = {
    base_url:"/assets/dummy/list_of_patients.json"
}
const options = {
    method:"GET",
    mode:"cors"
}

const getPatients = (input) =>{
    fetch(config.base_url, options)
    .then(res=>{
        console.info("========= response for getPatients", res)
        return res.json();
    })
    .then(json =>{
        return json
    })
}