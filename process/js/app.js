var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash'); 

var Form = require('./Form');

var ImageAddInterface = React.createClass({

    getInitialState: function(){
        return{
            product: []
        }
    }, //getInitialState

    updateProduct: function(value){
        this.setState({
            product: value
        });

        console.log('product updated');
    }, //updateProduct

    render: function(){

        return (<div>
                    <Form product = {this.state.product} updateProduct = {this.updateProduct}/>
                </div>)
    } //render
}); //ImageAddInterface

ReactDOM.render(<ImageAddInterface />, document.getElementById('body'));