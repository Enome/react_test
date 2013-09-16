/** @jsx React.DOM */
var React = require('./react');
var app = require('./src/app');

React.renderComponent(app(), document.getElementById('app'));
