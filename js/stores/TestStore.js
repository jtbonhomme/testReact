var CHANGE_EVENT = 'change';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter  = require('events').EventEmitter;
var assign        = require('object-assign');

var _store = {count: 0};

var TestStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(cb){
    console.log("[STORES] testStore.addChangeListener");
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb){
    console.log("[STORES] testStore.removeChangeListener");
    this.removeListener(CHANGE_EVENT, cb);
  },
  getCount: function(){
    console.log("[STORES] testStore.getCount");
    return _store.count;
  },
});

console.log("[STORES] AppDispatcher.register");
AppDispatcher.register(function(payload){
  console.log("[STORES] received payload");
  var action = payload.action;
  switch(action.actionType){
    case "INCREASE_COUNT":
      _store.count+=action.data;
      TestStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

module.exports = TestStore;