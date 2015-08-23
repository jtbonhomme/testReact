var React = require('react');
var TestStore = require('../stores/TestStore');
var TestActions = require('../actions/TestActions');

console.log("[COMPONENTS] Create Test component");
var Test = React.createClass({
  getInitialState: function(){
  console.log("[TEST] getInitialState");
    return {
      count: testStore.getCount()
    }
  },
  componentDidMount: function(){
  console.log("[TEST] componentDidMount");
    testStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function(){
  console.log("[TEST] componentWillUnmount");
    testStore.removeChangeListener(this._onChange);
  },
  _onChange: function(){
    console.log("[TEST] _onChange");
    this.setState({
      list: testStore.getCount()
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
