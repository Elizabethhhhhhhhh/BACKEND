import express from "express";

const app = express();


const port = 4000

//middleware
app.use(express.json());
try {
app.listen(port, () => {
    console.log('listening on port 4000...');
});
} catch (error) {
    console.log(error);
}

app.get('/ranny', async (request, response) => {
    response.status(200).json({message: "Hello there I am Here!"});
});
