/** @jsx React.DOM */

var React = require('../react');
var dates = require('./dates');

var events = React.createClass({

  render: function () {
    return (
      <div class='events'>This is the event list</div>
    );
  }

});

module.exports = events;
