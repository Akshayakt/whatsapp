
var Contacts = Backbone.Model.extend({
    defaults: {
        'id'			: '',
        'name'			: '',
        'display_pic'	: '',
        'status'		: ''
    },
    url: '/app/save-contacts'
});
var ContactCol = Backbone.Collection.extend({
    model: Contacts,
    url: '/app/get-contacts'
});