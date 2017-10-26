import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} from 'graphql/type';


import adminsites from './queries/adminsite';
import addSite from './queries/addsite';
import news from './queries/news';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'QuerySuperDot',
        fields: {          
            adminsites,
            news
        },
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutations',
        fields: {
            addSite,
        },
    }),
});
export default schema;