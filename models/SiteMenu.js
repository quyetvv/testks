var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * SiteMenu Model
 * ==================
 */

var SiteMenu = new keystone.List('SiteMenu', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

SiteMenu.add({
	title: { type: String, required: true },
	link: { type: Types.Url },
	site: { type: Types.Relationship, ref: 'AdminSite', single: true },
	group: { type: Types.Relationship, ref: 'SiteGroup', many: true },
	parentMenu: { type: Types.Relationship, ref: 'SiteMenu', single: true }
});

// SiteMenu.relationship({ ref: 'Post', path: 'posts', refPath: 'categories' });

SiteMenu.register();
