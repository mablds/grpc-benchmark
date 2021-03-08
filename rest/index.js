const express = require('express');
const app = express();

const notes = [
    { id: '1', title: 'Note 1', content: 'Content 1' },
    { id: '2', title: 'Note 2', content: 'Content 2' }
]

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', (req, res) => {
    res.json(notes)
})

app.listen(3333, () => console.log('Server Listening - :3333'))