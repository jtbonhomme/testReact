var AppDispatcher = require('../dispatcher/AppDispatcher');

// pseudo action, only to emit events, no method
var timerId = window.setInterval(function(){
  AppDispatcher.handleAction({
    actionType: "INCREASE_COUNT",
    data: 2
  });
}, 2000);