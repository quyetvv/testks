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
import siteInfo from './queries/siteInfo';
import postList from './queries/postList';
import postDetail from './queries/postDetail';
import news from './queries/news';
import pageLayout from './queries/pageLayout';


const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'QuerySuperDot',
        fields: {   
            siteInfo,       
            intl,
            adminsites,
            news,
            pageLayout,
            postList,
            postDetail 
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