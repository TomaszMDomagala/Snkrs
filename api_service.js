import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function postToApi(name, value, price, date) {
    axios.post('http://127.0.0.1:8000/snkrs/api/snkr/', {
        uuid: uuidv4(),
        name: name,
        value: value,
        price: price,
        date: date
    }, {
        headers: {
            'content-type': 'application/json'
        }
    })
    .then((res) => {
        console.log(res.data)
    })
    .catch((error) => {
        console.error(error)
    })
}

//postToApi()

function getFromApi(){
    axios.get('http://127.0.0.1:8000/snkrs/api/account/').then(resp => {
        console.log(resp.data);
});
}

export {postToApi, getFromApi};