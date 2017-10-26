import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import mySchema from './data/schema';
import expressGraphQL from 'express-graphql';
const cors = require('cors');
const PORT = 4001;

const app = express();

// app.use("/graphql", function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//     if (req.method === 'OPTIONS') {
//       res.sendStatus(200);
//     } else {
//       next();
//     }
// });

  
// bodyParser is needed just for POST.
app.use('/graphql', cors({credentials: true, origin: 'http://localhost:3000'}), bodyParser.json(), graphqlExpress({ schema: mySchema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

app.listen(PORT);