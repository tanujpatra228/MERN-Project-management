const express = require('express');
require('dotenv/config');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDb = require('./config/db');
const cors = require('cors');

const port = process.env.PORT || 3001;
const app = express();

// Connect to DB
connectDb();

// Middlewares
app.use(cors());

// Routes
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}));
app.listen(port, console.log(`Server started on port: ${port}`));