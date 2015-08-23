var React = require('react');
var TestStore = require('../stores/TestStore');
var TestActions = require('../actions/TestActions');

console.log("[COMPONENTS] Create TestApp component");

var TestApp = React.createClass({

  getInitialState: function(){
  console.log("[TEST] getInitialState");
    return {
      count: TestStore.getCount()
    }
  },

  componentDidMount: function(){
  console.log("[TEST] componentDidMount");
    TestStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
  console.log("[TEST] componentWillUnmount");
    TestStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    console.log("[TEST] _onChange");
    this.setState({
      list: TestStore.getCount()
    })
  },

  render: function() {
    console.log("[TEST] render");
    return (
      <div>
        {this.state.count}
      </div>
    );
  }
});

module.exports = TestApp;
