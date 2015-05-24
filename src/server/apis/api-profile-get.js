var fs = require('fs'),
	path = require('path')
	os = require('os');

var skills = [
	{
		title: 'Android',
		description: '3 years working expiren sfsdfljksdfsdf',
		logo: 'http://localhost:8080/res/android.jpg',
		detail: [
			{
				title: 'MobileGo',
				description: 'My first project after I greated, '
			},
			{
				title: 'Baidu Cloud OS',
				description: 'During my 3 year times in baidu, I was working on the Baidu OS Email and SIP related area.'
			}
		]
	},
	{
		title: 'Angular',
		description: '3 years working expiren sfsdfljksdfsdf',
		logo: 'http://localhost:8080/res/angular.png'
	},
	{
		title: 'Appengine',
		description: '3 years working expiren sfsdfljksdfsdf',
		logo: 'http://localhost:8080/res/appengine.png'
	},
	{
		title: 'Dart',
		description: '3 years working expiren sfsdfljksdfsdf',
		logo: 'http://localhost:8080/res/dartlang.png'
	},
	{
		title: 'Docker',
		description: '3 years working expiren sfsdfljksdfsdf',
		logo: 'http://localhost:8080/res/docker.png'
	},
	{
		title: 'Go',
		description: '3 years working expiren sfsdfljksdfsdf',
		logo: 'http://localhost:8080/res/golang.png'
	},
	{
		title: 'Kubernetes',
		description: '3 years working expiren sfsdfljksdfsdf',
		logo: 'http://localhost:8080/res/kubernetes.png'
	},
	{
		title: 'Nodejs',
		description: '3 years working expiren sfsdfljksdfsdf',
		logo: 'http://localhost:8080/res/nodejs.png'
	},
	{
		title: 'Polymer',
		description: '3 years working expiren sfsdfljksdfsdf',
		logo: 'http://localhost:8080/res/polymer.svg'
	},
	{
		title: 'React Native',
		description: '3 years working expiren sfsdfljksdfsdf',
		logo: 'http://localhost:8080/res/react-native.png'
	},
	{
		title: 'React',
		description: '3 years working expiren sfsdfljksdfsdf',
		logo: 'http://localhost:8080/res/react.svg'
	}
];

var profile = {
	name: 'Ruiqi Li',
	banner: 'http://localhost:8080/res/banner.png',
	skills: skills
};

module.exports = function (req, res, next) {
	res.json(profile);
};