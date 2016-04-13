var Vue = require('vue');
var Menu = require('./components/menu.vue')
var Bugify = require('./components/bugify.vue')

Vue.config.debug = true;

new Vue ({
	el: '#c8rriboo',

    components: {
    	menu: Menu,
    	bugify: Bugify,
	},

	data: {
		active_page: 'home',
	},

	ready: function() {
		alert('ready!');
	},
})