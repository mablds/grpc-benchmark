const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const packageDefinition = protoLoader.loadSync('teste.proto');
const pckg = grpc.loadPackageDefinition(packageDefinition);

console.time('request')

const client = new pckg.TesteService('localhost:50051',
    grpc.credentials.createInsecure());

client.GetOrders(null, (error, response) => {
    if (!error) {
        console.log(JSON.parse(response.ordersJson))
        console.timeEnd('request')
    } else {
        console.error(error)
    }
})
