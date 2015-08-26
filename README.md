TEST REACT
----------

Exemple 1: react-flux
=====================

This example starts a timer (TestActions .js) and dispatches an action type INCREASE_COUNT with data = 2 every 2 seconds.

The dispatcher (AppDispatcher.js) receives these INCREASE_COUNT events and dispatches them to the stores which subscribed to this event.

The store (TestStore.js) adds to a count the data received by the events INCREASE_COUNT it subscribed to. Each time the store value changes, it emits a change event.

A component (TestApp.react.js) listens to the store change events and displays the counter value on screen.

In this example, the component do not call any action method.

* Installation

```
% cd react-flux
% npm install
% npm start
% python -m SimpleHTTPServer 8080
```

Then open your browser on http://localhost:8080

Exemple 2: react-rxjs
=====================



Documentation and examples
==========================

* http://tylermcginnis.com/reactjs-tutorial-pt-3-architecting-react-js-apps-with-flux/
* https://github.com/facebook/flux/tree/master/examples/flux-todomvc
