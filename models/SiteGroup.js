var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * SiteGroup Model
 * ==================
 */

var SiteGroup = new keystone.List('SiteGroup', {
	autokey: { from: 'name', path: 'key', unique: true },
});

SiteGroup.add({
	name: { type: String, required: true },
	site: { type: Types.Relationship, ref: 'AdminSite', single: true },
	parentGroup: { type: Types.Relationship, ref: 'SiteGroup', single: true }
});

// SiteGroup.relationship({ ref: 'Post', path: 'posts', refPath: 'categories' });

SiteGroup.register();
