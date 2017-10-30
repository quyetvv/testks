/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const PostContentType = new ObjectType({
  name: 'PostContentType',
  fields: {
    brief: { type: StringType },
    extended: { type: StringType }
  }
});

const PostItemType = new ObjectType({
  name: 'PostItem',
  fields: {
    title: { type: new NonNull(ID) },
    slug: {type: StringType},
    state: { type: StringType },
    author: { type: StringType },
    publishedDate: {type: StringType},
    content: { type: PostContentType }
  },
});

export default PostItemType;
