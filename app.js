import express from "express";
import 'dotenv/config.js';
import bookRoutes from "./routers/BookRoutes.js";
import studentRoutes from "./routers/StudentRouters.js";
const app = express();




//middleware
app.use(express.json());
try {
app.listen(process.env.PORT || 4000, () => {
    console.log('listening to port ${process.env.PORT || 4000}...')
})
} catch (error) {
    console.log(error);
}

app.use('/book',bookRoutes);
app.use('/student',studentRoutes);
