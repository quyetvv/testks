/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList , GraphQLString as StringType , GraphQLObjectType as ObjectType} from 'graphql';
import AdminSiteType from '../types/AdminSiteType';
import keystone from 'keystone';

const SiteInfoType = new ObjectType({
  name: 'SiteInfoType',
  fields: {
    id: { type: StringType },
    name: { type: StringType },
    domains: {type: new GraphQLList(StringType)},
    domain: {type: StringType }
  }
});

const AdminSite = keystone.lists["AdminSite"]; 

const siteInfo = {
  type: SiteInfoType,
  args: {
    domain: { type: StringType },
  },
  resolve (value, { domain }){    
    return AdminSite.model.find({ domains: { $elemMatch: { $eq: domain } } }).exec().then((a,b) => {          
      return a.length > 0 ? a[0] : null;
    });
  }
};

export default siteInfo;