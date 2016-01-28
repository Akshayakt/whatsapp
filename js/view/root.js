
var Root = Backbone.View.extend({
            el: '#root',
            
            initialize: function(options) {
                this.contacts 	= options.contacts;
                this.chats 		= options.chats;
            },
            
            render: function() {
                
                var contactList = new List({
                    "contacts"	: this.contacts,
                    "chats"		: this.chats
                });
            
       			// var chatList = new List({
       			// 	""
       			// });
             this.$el.append(contactList.render().el);
            
            return this;
   }
});