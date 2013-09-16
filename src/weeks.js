/** @jsx React.DOM */

var React = require('../react');
var events = require('./events');
var dates = require('./dates');

var weeks = React.createClass({

  back: function () {
    console.log('back');
    this.setState({ current: this.state.current.add('days', -7) });
  },

  next: function () {
    console.log('next');
    this.setState({ current: this.state.current.add('days', -7) });
  },

  getInitialState: function () {

    return {
      current: dates.new()
    };
  
  },

  render: function () {

    var weeks = dates.weekRange(this.state.current).map(function (day) {
      return (
        <li>
          {dates.format(day)}
          {events({ day: day })}
        </li>
      );
    });

    return (
      <div class='days'>
        <button onClick={this.back}>back</button>
        <button onClick={this.next}>Next</button>
        <ul>{weeks}</ul>
      </div>
    );

  }

});

module.exports = weeks;
