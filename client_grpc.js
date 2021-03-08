const grpc = require('grpc')

const protoLoader = require('@grpc/proto-loader')
const packageDefinition = protoLoader.loadSync('notes.proto');
const NoteService = grpc.loadPackageDefinition(packageDefinition).NoteService;

console.time('request')

const client = new NoteService('localhost:50051',
    grpc.credentials.createInsecure());
    
client.list({}, (error, notes) => {
    if (!error) {
        console.log(notes)
    } else {
        console.error(error)
    }
})

console.timeEnd('request')