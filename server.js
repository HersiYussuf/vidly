const express = require('express');
const app = express()

app.use(express.json()); // middleware to parse json bodies


//Define a array to hold genres
let genres = [
    { id: 1, name: "Horor" },
    { id: 2, name: "Drama" },
     {id:3, name: "Action"}

]
// GET routes to retrieve genres

app.get("/api/genres", (req, res) => {
    res.send(genres)
});

// POST route to add a new genre

app.post('/api/genres', (req, res) => {
    const { name } = req.body;
    const genre = {
        id: genres.lenth + 1,
        name
    };
    genres.push(genre);
    res.send(genres);
})
// PUT route
app.put('/api/genres/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send('Genre not found.');

    genre.name = req.body.name;
    res.send(genre);
});

// DELETE ROUTE genres
app.delete("/api/genres/:id", (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) return res.status(404).send("Genre not found.");
    const index = genres.indexOf(genres);
    genres.splice(index, 1);
    res.send(genres);

});
// server set up
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port} `));