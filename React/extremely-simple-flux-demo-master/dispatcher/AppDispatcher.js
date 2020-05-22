var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var ListStore = require('../stores/ListStore');

// dispatcter用于将action转发到store view--->store
// register用来登记各种action回调函数
AppDispatcher.register(function(action) {
    switch (action.actionType) {
        case 'ADD_NEW_ITEM':
            ListStore.addNewItemHandler(action.text);
            ListStore.emitChange();
            break;
        default:
            // no op
    }
})

module.exports = AppDispatcher;