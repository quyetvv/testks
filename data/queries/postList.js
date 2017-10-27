/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import PostItemType from '../types/PostItemType';
import keystone from 'keystone';

const PostList = keystone.lists["Post"]; 

let items = [];

const PostLists = {
  type: new List(PostItemType),
  resolve() {          
    return PostList.model.find();
  },
};

export default PostLists;