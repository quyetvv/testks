import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} from 'graphql/type';

import intl from './queries/intl';
import adminsites from './queries/adminsite';
import addSite from './queries/addsite';
import postList from './queries/postList';
import news from './queries/news';
import pageLayout from './queries/pageLayout';


const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'QuerySuperDot',
        fields: {          
            intl,
            adminsites,
            news,
            pageLayout,
            postList
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