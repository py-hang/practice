var AppDispatcher = require('../dispatcher/AppDispatcher');
// 用于存放所有的action动作，type是用来说明动作的类型，text用来对状态进行操作
var ButtonActions = {

    addNewItem: function(text) {
        AppDispatcher.dispatch({
            actionType: 'ADD_NEW_ITEM',
            text: text
        });
    },

};

module.exports = ButtonActions;