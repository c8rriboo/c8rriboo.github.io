<template>
	<div id="menu">
		<ul>
			<li v-for="(page_id, page) in menu"
				@click="setActivePage($event, page_id)"
				:class="{active: page_id == active_page}"
			>
				<span>{{ page }}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	module.exports = {

	    data: function() {
	        return {
				menu: {
					'home-page': 'Home',
					'profile-page': 'Me, myself & I',
				},
	            
	        }
	    },

	    methods: {
	        setActivePage: function(event, page_id) {
	            this.$parent.active_page = page_id;
	        },
	    },

	    computed: {
	    	active_page: function() {
	    		return this.$parent.active_page
	    	},
	    },

	    created: function() {
	        
	    },

	    ready: function() {

	    },
	}
</script>