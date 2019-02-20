var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash'); 

var Form = require('./Form');
var PView = require('./PView')

var ImageAddInterface = React.createClass({

    getInitialState: function(){
        return{
            product: {name: 'Product Name', 
                        id: 'product id',
                        category: 'product category',
                        price: '$price',
                        desc: 'product description'},

            imageRes: []
        } 
    }, //getInitialState 

    updateProduct: function(value1, value2){
        this.setState({
            product: value1,
            imageRes: value2
        });

        console.log('product updated');   
    }, //updateProduct

    render: function(){

        return (<div>
                    <Form updateProduct = {this.updateProduct}/>
                    <PView product = {this.state.product} imageRes = {this.state.imageRes}/>
                </div>)
    } //render
}); //ImageAddInterface

ReactDOM.render(<ImageAddInterface />, document.getElementById('body'));