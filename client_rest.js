const axios = require('axios')

console.time('request');

axios.get('http://localhost:3333/orders').then(res => {
    console.log(res.data)
    console.timeEnd('request');
});
