<template>
	<div id="menu">
		<ul>
			<li v-for="(page_id, page) in menu"
				@click="setActivePage(page_id)"
			>
				{{ page }}
			</li>
		</ul>
	</div>
</template>

<script>
	module.exports = {

	    data: function() {
	        return {
				menu: {
					home: 'Home',
					profile: 'Me, myself & I',
					contact: 'Contact',
				},
	            
	        }
	    },

	    computed: {
	        _current_link_coords: function() {
	            
	        }
	    },

	    events: {
	        'page_change': function(page_id) {
	            
	        }
	    },

	    methods: {
	        setActivePage: function(page_id) {
	            console.log(page_id);
	        },

	        
	    },

	    created: function() {
	        
	    },

	    ready: function() {

	    },
	}
</script>