
var ChatListItem = Backbone.Model.extend({
    defaults: {
        'id'			: '',
        'name'			: '',
        'display_pic'	: '',
        'chat_date'		: ''
    },
    url: '/app/save-chat'
});

var ChatList = Backbone.Collection.extend({
    model: ChatListItem,
    url: '/app/get-chats'
});

