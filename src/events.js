/** @jsx React.DOM */

var React = require('../react');
var dates = require('./dates');

var events = React.createClass({

  render: function () {
    return (
      <h1>{dates.format(this.props.day)}</h1>
    );
  }

});

module.exports = events;
