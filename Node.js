
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://nathanielperry:lEa48UHVH3CADETV@cs20perry.xso7g.mongodb.net/?retryWrites=true&w=majority&appName=CS20Perry";


const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection URI and database details
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

app.use(express.static('public')); // Serve static HTML files from the 'public' folder

// API endpoint to fetch books data
app.get('/api/books', async function (req, res) {
    try {
        await client.connect();
        const dbo = client.db("ShelfSwap");
        const collection = dbo.collection('books');

        const books = await collection.find().toArray();
        res.json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).send('Internal Server Error');
    } finally {
        await client.close();
    }
});

app.listen(port);
