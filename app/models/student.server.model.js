'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Student Schema
 */
var StudentSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Student name',
		trim: true
	},
	firstName: {
		type: String,
		default: '',
		required: 'Please fill Student first name',
		trim: true
	},
	bio: {
		type: String,
		default: '',
		required: 'Please fill Student bio',
		trim: true
	},
	skills: {
		type: String,
		default: '',
		required: 'Please fill Student skills',
		trim: true
	},
	updated: {
		type: Date,
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Student', StudentSchema);