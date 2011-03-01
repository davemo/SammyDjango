(function(w) {	
	
	var app = w.APP = w.APP || {};
	
	// this is an attempt at matching similar configuration in djangos urls.py, although we don't have tuples in javascript
	app.urlpatterns = [
		{
			'get': ['', 'root.index']
		},
		{
			'get': ['notes/', 'notes.index'],
			'post': ['notes/submit', 'notes.submit']
		},
		{
			'get': ['todos/', 'todos.index']
		}
	];
	
	// eventually, i'd like to be able to migrate these out into a folder convention like djangos
	
	// scripts
	// 		- app.js
	// views
	//		- root.js
	//		- notes.js
	// 		- todos.js
	// templates
	//		- notes
	//			- index.html
	
	// the goal is that, when a sammy route is executed the appropriate function is called and a template is loaded
	// from that function that matches a template path inside templates directory
	
	app.root = {
		index: function() {
			this.title = "Welcome to Sammy.JS";
			this.partial('templates/index.ms'); // loads in the template and swaps the apps $element context (#app)
		}
	};
	
	app.notes = {
		index: function() {
			this.$element().html("The notes configuration should load here");
		},
		submit: function() {
			this.$element().html("You submitted a note");
		}
	};
	
	app.todos = {
		index: function() {
			this.$element().html("The todos configuration should load here");
		}
	};
		
}(window));

