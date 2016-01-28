
var contacts= new ContactCol([{
    id		: 1,
    name	: 'Tom',
    status	: 'busy'
   
}, {
    id		: 2,
    name	: 'Sam',
    status	: 'available'
}, {
    id		: 3,
    name	: 'Ron',
    status	: 'no status'
}]);

var chats = new ChatList();
var root = new Root({
    "contacts"	: contacts,
    "chats"		: chats
});

root.render();
