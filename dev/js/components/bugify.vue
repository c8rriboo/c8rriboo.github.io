<template>
	<span id="bugify" @click="fakeDebug(0)">
		{{ title }}
	</span>
</template>

<script>
	module.exports = {

		name: 'bugify',

		props: ['string', 'loop', 'autoplay'],

	    data: function() {
	        return {
				title: false,

				characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#|@!&?;/\\-_<>#|@!&?;/\\-_<>#|@!&?;/\\-_<>#|@!&?;/\\-_<>',

				start_debug: 2000,
				false_debug_during: 2000,
				false_debug_each: 50,

				should_loop: false,
				loop_interval: 30000,
	        }
	    },

	    methods: {
	    	init: function(wait = false) {
	    		var vm = this;

	    		setTimeout(function(){
		    		vm.fakeDebug(0);
				}, vm.start_debug);

	    	},

	    	fakeDebug: function(index) {
	    		var	vm = this;

	    		vm.changeLetter();

			    setTimeout(function() {
			    	index++;
			    	if (index * vm.false_debug_each <= vm.false_debug_during) {
			    		vm.fakeDebug(index);
			    	} else {
						vm.debug(0);
					}
			    }, vm.false_debug_each);
	    	},

	    	debug: function(index) {
	    		var	vm = this;

    			this.title = vm.replaceAt(index, vm.string[index]);

			    setTimeout(function() {
			    	index++;
			    	if (index < vm.title.length) {
			    		vm.debug(index);
			    	}
			    }, vm.false_debug_each);
	    	},

	    	changeLetter: function() {
	    		var random_index = this.getRandomStringIndex(this.title),
	    			letter = this.title[random_index];

	    		this.title = this.replaceAt(random_index, this.getRandomChar());
	    	},

	    	getRandomStringIndex: function(string) {
	    		return Math.floor(Math.random() * string.length);
	    	},

	    	getRandomChar: function() {
	    		return this.characters[this.getRandomStringIndex(this.characters)];
	    	},

	    	replaceAt: function(index, character) {
			    return this.title.substr(0, index) + character + this.title.substr(index+character.length);
			},
	    },

	    created: function() {
	    	this.title = this.string;
	    	this._loop = (this.loop === 'true');
	    	this._autoplay = (this.autoplay === 'true');

	    	if (this._autoplay) {
		    	var random_string = '';

		    	for (var i = this.title.length - 1; i >= 0; i--) {
		    		random_string += this.getRandomChar();
		    	};

		    	this.title = random_string;
	    	};
	    },

	    ready: function() {
	    	if (this._autoplay) {
    			this.init();

		    	if (this._loop) {
			    	setInterval(this.init, this.loop_interval);
			    }
	    	};
	    },
	}
</script>