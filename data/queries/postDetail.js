/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List, GraphQLString as StringType } from 'graphql';
import PostItemType from '../types/PostItemType';
import keystone from 'keystone';

const PostList = keystone.lists["Post"]; 

const postDetail = {
  type: PostItemType,
  args: {
    slug: { type: StringType },
  },
  resolve (value, { slug }){     
    return PostList.model.find({ slug: slug }).exec().then((a,b) => {          
      return a.length > 0 ? a[0] : null;
    });
  }
};

export default postDetail;