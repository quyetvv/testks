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


const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'QuerySuperDot',
        fields: {          
            adminsites          
        },
    }),
    // mutation: new GraphQLObjectType({
    //     name: 'Mutations',
    //     fields: {
    //         // addSite,
    //     },
    // }),
});
export default schema;