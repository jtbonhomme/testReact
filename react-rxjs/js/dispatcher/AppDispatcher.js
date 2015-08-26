var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();

console.log("[DISPATCHER] AppDispatcher.handleAction");
AppDispatcher.handleAction = function(action){
  this.dispatch({
    source: 'VIEW_ACTION',
    actionType: action.actionType,
    data: action.data
  });
};

module.exports = AppDispatcher;
