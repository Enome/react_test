var React = require('../react');
var weeks = require('./weeks');

var app = React.createClass({

  render: function () {
    return weeks();
  }

});

module.exports = app;
