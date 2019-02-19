var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash'); 

var Form = require('./Form');
var PVIew = require('./PView'); 

var ImageAddInterface = React.createClass({

    getInitialState: function(){
        return{
            product: []
        }
    }, //getInitialState

    render: function(){

        return (<div>
                    <Form product = {this.state.product}/>
                    <PVIew product = {this.state.product}/>
                </div>)
    } //render
}); //ImageAddInterface

ReactDOM.render(<ImageAddInterface />, document.getElementById('body'));