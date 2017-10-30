/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLObjectType as ObjectType, GraphQLList as List, GraphQLString as StringType } from 'graphql';
import NewsItemType from '../types/NewsItemType';
import fetch from 'isomorphic-fetch';

const pageLayoutType = new ObjectType({
  name: 'PageLayoutType',
  fields: {
    content: { type: StringType },    
    css : {type : StringType}
  },
});

// React.js News Feed (RSS)
const url =
  'https://api.rss2json.com/v1/api.json' +
  '?rss_url=https%3A%2F%2Freactjsnews.com%2Ffeed.xml';

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const pageLayoutQuery = {
  type: pageLayoutType,
  args: {
    pageType: { type: StringType },
  },
  resolve: (value, { pageType }) => {  
    console.log("request page layout for: " + pageType);
    return {
      css: 'region:{background: "#fff", font: "italic"}',
      content: `{
        regions: [
          {
            type: 'Header',
            css: 'customer-header',
            blocks: [
              {
                blockType: 'ChannelList',
                id: '1',
                data: ''
              },
              {
                blockType: 'LeftMenu',
                id: '2',
                data: ''
              },
              {
                blockType: 'LanguageSwicher',
                id: '3',
                data: ''
              }
            ]
          }
        ]
      }`
    }
  },
};

export default pageLayoutQuery;
