const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('../teste.proto')
const packageObject = grpc.loadPackageDefinition(packageDefinition);

const notes = [
    { id: '1', title: 'Note 1', content: 'Content 1' },
    { id: '2', title: 'Note 2', content: 'Content 2' }
]

const orders = JSON.stringify(require('../orders.json'))

const server = new grpc.Server();

server.addService(packageObject.TesteService.service, {
    List: (_, callback) => {
        console.log('List Notes called')
        callback(null, {notes: notes})
    },
    GetOrders: (_, callback) => {
        console.log('GetOrders called')
        callback(null, {ordersJson: orders})
    }
})

server.bind('127.0.0.1:50051', grpc.ServerCredentials.createInsecure())
console.log('Server Listening - :50051')
server.start()