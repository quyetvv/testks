/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import { GraphQLList as List } from 'graphql';
import AdminSiteType from '../types/AdminSiteType';
import keystone from 'keystone';

const AdminSite = keystone.lists["AdminSite"]; 

let items = [];

const adminsites = {
  type: new List(AdminSiteType),
  resolve() {      
    console.log("request admin sites");
    return AdminSite.model.find();
  },
};

export default adminsites;
