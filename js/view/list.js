
var ListItem = Backbone.View.extend({
    tagName: 'li',
    
    className: 'list-group-item',
    
    initialize: function(options) {
            this.contacts   = options.contacts;
            this.chats      = options.chats;
    },
   
    render: function() {

        var userId  = parseInt( this.model.get('id') );
        var contacts = this.contacts.findWhere( { id: userId });
       
        var tmp = "<a href=''><%= user_name %> <span class='span'>mobile</span><br><%= status %>  </a>";
        this.temp = _.template(tmp);
        
        var EN = {
            user_name   : contacts.get('name'),
            status      : contacts.get('status')
        }
        
        this.complied = this.temp(EN);
        
        this.$el.append(this.complied);
        
        return this;
    }
});

var List = Backbone.View.extend({
    tagName: 'ul',
    
    className: 'list-group',
    
    initialize: function(options) {
        this.contacts = options.contacts;
        this.chats    = options.chats;
                // this.chats.listenTo( this.contacts, 'click', this.newrender );
    },
   
    allRender: function() {
        var li, html = [];
       
        this.contacts.each(function(mod) {
            
            li = new ListItem({
                model       : mod,
                contacts    : this.contacts,
            });

            html.push(li.render().el);
        });

        this.$el.html(html);
    },
    
    render: function(mod, col, action) {
        if (!action) {
            this.allRender();
        } 
       
        return this;
    }

});



