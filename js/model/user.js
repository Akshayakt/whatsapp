
var User = Backbone.Model.extend({
    defaults: {
        'id'			: '',
        'name'			: '',
		'display_pic'	: '',
		'last_seen'		: ''
		
    },
    url: '/app/save-user'
});
var Usercollection = Backbone.Collection.extend({
    model: User,
    url: '/app/get-'
});