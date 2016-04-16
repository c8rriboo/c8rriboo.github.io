var Vue = require('vue');

// pages
var HomePage = require('./components/home-page.vue')
var ProfilePage = require('./components/profile-page.vue')

// elements ?
var Menu = require('./components/menu.vue')

// plugins
var Bugify = require('./components/bugify.vue')

Vue.config.debug = true;

new Vue ({
	el: '#c8rriboo',

    components: {
    	menu: Menu,
    	bugify: Bugify,
    	'home-page': HomePage,
    	'profile-page': ProfilePage,
	},

	data: {
		active_page: 'home-page',
	},

	ready: function() {
		// alert('ready!');
	},
})