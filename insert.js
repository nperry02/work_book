
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://nathanielperry:lEa48UHVH3CADETV@cs20perry.xso7g.mongodb.net/?retryWrites=true&w=majority&appName=CS20Perry";

const readline = require('readline')
const fs = require('fs')

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

//file getting from

async function run() {
    try {
        await client.connect();

        await client.db("admin").command({ ping: 1 });

        //database and collection
        var dbo = client.db("ShelfSwap");
        var collection = dbo.collection('books');

        //reading file
        const allData = [
            { 
                name: "SwapSpot 1",
                books: ["Calvin and Hobbes", "Harry Potter"],
                lat: 42.39639, 
                lng: -71.12072 
            }, 
            { 
                name: "SwapSpot 2", 
                books: ["Lord of the Rings", "Book12", "Hop on Pop", "Cheese"],
                lat: 42.39575, 
                lng:  -71.12382 
            },
            {
                name: "SwapSpot 3", 
                books: ["book", "book3", "book23"],
                lat: 42.3, 
                lng: -71.1 
            },
            { 
                name: "SwapSpot 4",
                books: ["Book1"], 
                lat: 42.408, 
                lng: -71.1154
            },
            { 
                name: "SwapSpot 5", 
                books: ["Green Eggs and Ham", "Harry Potter"],
                lat: 42.3547, 
                lng: -71.0643
            },
            { 
                name: "SwapSpot 6", 
                books: ["Dune", "Lord of the Flies"],
                lat: 40.7417, 
                lng: -74.012
            },
            { 
                name: "SwapSpot 7", 
                books: ["Happy", "book200"],
                lat: 38.8685, 
                lng: -77.0471
            }
        ];
        


        // console.log(newData);
        //     //put into all
        //     allData.push(newData);

        //make sure it isnt reading anymore

        await collection.insertMany(allData);

    } finally {
        await client.close();
    }
}
run().catch(console.dir);
