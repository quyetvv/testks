var keystone = require('keystone');
var _ = require('underscore'),
countries = require('./Countries').countries;
var Types = keystone.Field.Types;

/**
 * AdminSite Model
 * ==================
 */

var AdminSite = new keystone.List('AdminSite', {
	autokey: { from: 'name', path: 'key', unique: true },
});

var cities = exports.cities = _.flatten(countries.map(function(country) {
	return country.cities.map(function(city) {
		return { country: country.name, name: city.name };
	});
}));




new keystone.List('City').add({
    name: String,
    country: { type: Types.Select, options: _.pluck(countries, 'name') }
}).register();

exports.create = {
	City: cities
}

AdminSite.add({	
	name: { type: String, required: true },
	country: { type: Types.Select, options: _.pluck(countries, 'name') },
	city: { type: Types.Relationship, ref: 'City', filters: { country: ':country' }}
});

AdminSite.relationship({ ref: 'PostCategory', path: 'postCats', refPath: 'sites' });

AdminSite.register();